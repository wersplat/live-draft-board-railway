import type { SupabaseClient, User } from '@supabase/supabase-js';

export interface AuthContextType {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  supabase: SupabaseClient;
}
