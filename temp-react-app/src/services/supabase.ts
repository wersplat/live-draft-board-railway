import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://suqhwtwfvpcyvcbnycsa.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cWh3dHdmdnBjeXZjYnluY3NhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0Mzk2MzAsImV4cCI6MjA2NzAxNTYzMH0.ROawOqve1AezL2Asi0MqcWy4GbISImG_CNbaXxNg2lo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export type Team = {
  id: string;
  name: string;
  logo: string | null;
  created_at: string;
};

export type Player = {
  id: string;
  name: string;
  position: string;
  team: string;
  available: boolean;
  photo_url?: string | null;
  created_at: string;
};

export type DraftPick = {
  id: string;
  pick_number: number;
  team_id: string;
  player_id: string;
  player_name: string;
  player_position: string;
  created_at: string;
};

// Teams API
export const teamsApi = {
  getAll: async (): Promise<Team[]> => {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  getById: async (id: string): Promise<Team | null> => {
    const { data, error } = await supabase
      .from('teams')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) return null;
    return data;
  },
};

// Players API
export const playersApi = {
  getAll: async (): Promise<Player[]> => {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  getAvailable: async (): Promise<Player[]> => {
    const { data, error } = await supabase
      .from('players')
      .select('*')
      .eq('available', true)
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  draftPlayer: async (playerId: string, teamId: string, pickNumber: number): Promise<void> => {
    // Get player details first
    const { data: player, error: playerError } = await supabase
      .from('players')
      .select('*')
      .eq('id', playerId)
      .single();
    
    if (playerError || !player) {
      throw new Error('Player not found');
    }

    // Create draft pick
    const { error: pickError } = await supabase
      .from('draft_picks')
      .insert([
        {
          pick_number: pickNumber,
          team_id: teamId,
          player_id: playerId,
          player_name: player.name,
          player_position: player.position,
        },
      ]);

    if (pickError) throw pickError;

    // Mark player as drafted
    const { error: updateError } = await supabase
      .from('players')
      .update({ available: false })
      .eq('id', playerId);

    if (updateError) throw updateError;
  },
};

// Draft Picks API
export const draftPicksApi = {
  getAll: async (): Promise<DraftPick[]> => {
    const { data, error } = await supabase
      .from('draft_picks')
      .select('*')
      .order('pick_number');
    
    if (error) throw error;
    return data || [];
  },

  getByTeam: async (teamId: string): Promise<DraftPick[]> => {
    const { data, error } = await supabase
      .from('draft_picks')
      .select('*')
      .eq('team_id', teamId)
      .order('pick_number');
    
    if (error) throw error;
    return data || [];
  },

  resetDraft: async (): Promise<void> => {
    // Delete all draft picks
    const { error: picksError } = await supabase
      .from('draft_picks')
      .delete()
      .gte('pick_number', 0);
    
    if (picksError) throw picksError;

    // Reset all players to available
    const { error: playersError } = await supabase
      .from('players')
      .update({ available: true })
      .eq('available', false);
    
    if (playersError) throw playersError;
  },
};

// Realtime subscriptions
export const subscribeToDraftUpdates = (callback: () => void) => {
  const subscription = supabase
    .channel('draft-updates')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'draft_picks' },
      () => {
        callback();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(subscription);
  };
};

export const subscribeToPlayerUpdates = (callback: () => void) => {
  const subscription = supabase
    .channel('player-updates')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'players' },
      () => {
        callback();
      }
    )
    .subscribe();

  return () => {
    supabase.removeChannel(subscription);
  };
};
