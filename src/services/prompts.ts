export function buildPrompt(dream: string, context: string): string {
  return `
  You are a skilled dream analyst with a background in Jungian psychology.
  Interpret the following dream using both symbolic insights and the context below.
  
  Dream:
  \"\"\"${dream}\"\"\"
  
  Web Context:
  \"\"\"${context}\"\"\"
  
  Interpret the dream clearly and concisely.
  `;
}
