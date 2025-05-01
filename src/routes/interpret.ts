import express from "express";
import { queryWebSearch } from "../services/webSearch";
import { callLLM } from "../services/llmClient";
import { buildPrompt } from "../services/prompts";
import { DreamInput } from "../types/Dream";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { text }: DreamInput = req.body;
    const context = await queryWebSearch(text);
    const prompt = buildPrompt(text, context);
    const interpretation = await callLLM(prompt);

    res.json({ interpretation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to interpret dream." });
  }
});

export default router;
