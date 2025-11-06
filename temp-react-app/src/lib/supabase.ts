import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'https://qwpxsufrgigpjcxtnery.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3cHhzdWZyZ2lncGpjeHRuZXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE4NzI1MjksImV4cCI6MjA2NzQ0ODUyOX0.ujcyEXDgpIJVaNb7IeFZV9Yrl2l41xHq-TdEut-Wxg0'
);
