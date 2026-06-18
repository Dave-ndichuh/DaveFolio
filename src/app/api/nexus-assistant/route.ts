import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  try {
    const result = await streamText({
      model: google("gemini-2.5-flash"),
      messages,
      system: `You are the Technical Liaison for Nexus Group.
Your primary role is to answer questions about Nexus Group's ventures, capabilities, and technical solutions based on the context provided.
Do not hallucinate external ventures or products. Keep answers professional, technical, and concise.

Context:
Nexus Group builds agentic AI systems, smart off-grid infrastructure, and enterprise workforce tools.`,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("AI STREAM ERROR:", error);
    return new Response(JSON.stringify({ error: error.message || "Unknown error" }), { status: 500 });
  }
}
