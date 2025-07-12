import { useState, useEffect, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context';
import { supabase } from '../../lib/supabase';
import type { User } from '@supabase/supabase-js';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check active sessions and set the user
    const checkSession = async () => {
      try {
        setLoading(true);
        const { data: { session } } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Listen for changes in auth state
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      
      // Redirect to home after successful sign in
      if (event === 'SIGNED_IN' && window.location.pathname === '/login') {
        navigate('/');
      }
    });

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, [navigate]);

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  }, [navigate]);

  const value = useMemo(() => ({
    user,
    signIn,
    signOut,
    loading,
    supabase,
  }), [user, loading, signIn, signOut]);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
