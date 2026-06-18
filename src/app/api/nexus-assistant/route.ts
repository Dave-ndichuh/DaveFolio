import { nexusAssistantFlow } from "@/genkit/nexusAssistant";
import { appRoute } from "@genkit-ai/next";

export const POST = appRoute(nexusAssistantFlow);
