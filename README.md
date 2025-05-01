# Dreams Backend

Backend service for the dream interpretation using llm POC, built with Node.js, Express, and TypeScript.

This takes the users input "dream", adds more context with web search through Serper (could be changed to Preplexity later) then creates a prompt and passes it to a model running locally.


## Running the Application

- Download ollama https://ollama.com/
- Once downloaded run `ollama run openhermes` to test locally through terminal
- Run `ollama serve` to run the model locally, now it should be available at http://localhost:11434
- Run `npm run dev`

## Usage/Testing with curl

```
curl -X POST http://localhost:3000/interpret \
  -H "Content-Type: application/json" \
  -d '{"text": "I was walking through a forest and saw a red snake staring at me."}'
```


## Environment Variables

Create a `.env` file in the root directory with the following variables:
```
SERPER_API_KEY=your_api_key_here
LLM_ENDPOINT=http://127.0.0.1:11434
```

