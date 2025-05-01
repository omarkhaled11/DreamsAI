import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const OLLAMA_ENDPOINT = process.env.LLM_ENDPOINT!;

export async function callLLM(prompt: string): Promise<string> {
  const res = await axios.post(`${OLLAMA_ENDPOINT}/api/generate`, {
    model: "openhermes",
    prompt,
    stream: false,
  });

  return res.data.response.trim();
}
