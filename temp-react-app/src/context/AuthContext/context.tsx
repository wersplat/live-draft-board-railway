import { createContext } from 'react';
import type { SupabaseClient, User } from '@supabase/supabase-js';

interface IAuthContext {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  supabase: SupabaseClient;
}

export type AuthContextType = IAuthContext;

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
