# 📝 Product Requirements Document (PRD)
## Project: Dream Interpreter API
### Version: 1.0

## 1. Objective
Build a backend API service that will power a mobile application for dream interpretation. The service takes a user's dream text, enhances the interpretation with contextual web search results, and returns a coherent, meaningful interpretation using a locally hosted LLM.

## 2. Core Features

| Feature | Description |
|---------|-------------|
| `/interpret` endpoint | Accepts a dream text and returns an interpretation |
| Web Search Integration | Queries Serper.dev to find recent and relevant context for the dream |
| LLM Inference | Uses a local LLM (via Ollama) to generate an interpretation with search context |
| Testing Interface | Simple web interface for testing and validating API functionality |

## 3. User Flow
1. Mobile app sends a POST request with a dream description to `/interpret`
2. Backend:
   - Sends the dream to Serper.dev to gather related topics or symbols
   - Constructs a prompt combining the dream and search results
   - Sends the prompt to the local LLM running via Ollama
   - The LLM returns a natural-language interpretation
3. API responds with the final interpretation as JSON

## 4. Technical Stack
- **Language**: TypeScript (Node.js)
- **Framework**: Express
- **LLM Runtime**: Ollama
- **Model (Initial)**: openhermes (Mistral-based)
- **Search API**: Serper.dev
- **Testing Tools**: HTML/CSS/JavaScript (static files)

## 5. API Specification

### POST `/interpret`

#### Request Body
```json
{
  "text": "I was swimming in the ocean and saw a glowing orb."
}
```

#### Response
```json
{
  "interpretation": "Dreaming of a glowing orb in the ocean symbolizes intuition..."
}
```

#### Error Codes
- `400`: Missing or invalid input
- `500`: Failure from LLM or search

## 6. Environment Variables
```env
PORT=3000
LLM_ENDPOINT=http://127.0.0.1:11434
SERPER_API_KEY=your-serper-api-key
```

## 7. Testing Interface
The project includes a simple web interface for testing and validating the API functionality:

- **Purpose**: Development and testing tool for API validation
- **Location**: `/public/index.html`
- **Access**: Available at the root URL (`/`) when the server is running
- **Features**:
  - Large textarea for dream input
  - Submit button and Enter key support
  - Loading state indicator
  - Error handling and display
  - Clean, responsive design
- **Note**: This interface is for development/testing purposes only and will not be part of the production mobile application

## 8. Out of Scope (for now)
- User authentication
- Dream history storage or analytics
- Advanced model switching


## 9. Future Considerations
- Add rate limiting for API endpoints
- Implement proper error handling for mobile app integration
- Add API documentation for mobile developers
- Add health check endpoints for monitoring

