export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Dream {
  id: string;
  user_id: string;
  content: string;
  symbols: string[];
  interpretation?: string;
  created_at: string;
}
