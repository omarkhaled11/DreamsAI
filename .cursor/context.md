
# Dream Interpreter - Project Context

This project is a backend API for interpreting dreams using a local LLM and contextual web search.

## Purpose

Users submit a short dream description (natural language), and the system returns a meaningful interpretation by combining:
1. Web search results (via Serper.dev) for symbolic/contextual grounding.
2. A locally hosted LLM (via Ollama) to generate the actual interpretation text.

---

## Technologies

- **Language:** TypeScript (Node.js)
- **Framework:** Express
- **LLM:** Ollama running OpenHermes (Mistral variant)
- **Search Provider:** Serper.dev
- **Environment Config:** `.env` file

---

## File Overview

### `/src/index.ts`
Main entry point. Sets up the Express server and routes.

### `/src/routes/interpret.ts`
Handles the `/interpret` route. Accepts dream text and coordinates the flow:
- Calls `search.ts` to fetch relevant context
- Prepares the prompt using `prompt.ts`
- Calls `llmClient.ts` to get an interpretation

### `/src/services/search.ts`
Queries the Serper.dev API using the submitted dream text. Returns relevant search results.

### `/src/services/llmClient.ts`
Handles communication with Ollama. Sends prompts to the local model and returns results.

### `/src/services/prompt.ts`
Prepares the final LLM prompt using the dream text and search context.

---

See `PRD.md` for detailed feature goals and limitations.
