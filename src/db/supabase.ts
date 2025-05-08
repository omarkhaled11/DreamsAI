import { createClient } from '@supabase/supabase-js';
import logger from '../lib/logger';

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Test the connection
supabase.from('dreams').select('count').then(
  () => logger.info('Supabase connection successful'),
  (error: Error) => logger.error('Supabase connection error:', error)
); 