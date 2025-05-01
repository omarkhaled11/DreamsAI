import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const SERPER_API_KEY = process.env.SERPER_API_KEY!;
const SEARCH_URL = "https://google.serper.dev/search";

export async function queryWebSearch(query: string): Promise<string> {
  const res = await axios.post(
    SEARCH_URL,
    { q: query },
    { headers: { "X-API-KEY": SERPER_API_KEY } }
  );

  const results = res.data.organic || [];
  return results
    .slice(0, 5)
    .map((r: any) => `- ${r.title}: ${r.snippet}`)
    .join("\n");
}
