import { useState, useEffect, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import { supabase } from '../../lib/supabase';
import { AuthContext } from './context';
import type { AuthContextType } from './types';
import type { Session } from '@supabase/supabase-js';

// Export the provider as a named constant to help with Fast Refresh
const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthContextType['user']>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and set the user
    supabase.auth.getSession().then(({ data: { session } }: { data: { session: Session | null } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for changes in authentication state
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn: AuthContextType['signIn'] = async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const signOut: AuthContextType['signOut'] = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo<AuthContextType>(
    () => ({
      user,
      signIn,
      signOut,
      loading,
      supabase,
    }),
    [user, loading] // Removed supabase from deps as it's a stable reference
  );

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
// Re-export the hook for backward compatibility
export { useAuth } from './useAuth';
