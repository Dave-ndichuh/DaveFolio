import { genkit, z } from "genkit";
import { googleAI } from "@genkit-ai/google-genai";

export const ai = genkit({
  plugins: [googleAI()],
});

export const nexusAssistantFlow = ai.defineFlow(
  {
    name: "nexusAssistantFlow",
    inputSchema: z.object({
      question: z.string(),
      context: z.string().optional(),
    }),
    outputSchema: z.string(),
  },
  async (input, { sendChunk }) => {
    const prompt = `You are the Technical Liaison for Nexus Group.
Your primary role is to answer questions about Nexus Group's ventures, capabilities, and technical solutions based on the context provided.
Do not hallucinate external ventures or products. Keep answers professional, technical, and concise.

Context:
${input.context || "Nexus Group builds agentic AI systems, smart off-grid infrastructure, and enterprise workforce tools."}

User Question: ${input.question}`;

    const response = await ai.generateStream({
      model: googleAI.model('gemini-2.5-flash'),
      prompt: prompt,
    });

    let fullText = "";
    for await (const chunk of response.stream) {
      fullText += chunk.text;
      sendChunk(chunk.text);
    }

    return fullText;
  }
);
