import { supabase } from '../lib/supabase';
import { LEGENDS_LEAGUE_ID, type Database } from './supabase';

type DraftPoolRow = Database['public']['Tables']['draft_pool']['Row'];

export type DraftPoolPlayer = DraftPoolRow & {
  player_name: string;
  position: string | null;
  team: string | null;
};

export const draftPoolApi = {
  getAll: async (): Promise<DraftPoolPlayer[]> => {
    const { data, error } = await supabase
      .from('draft_pool')
      .select(`
        *,
        player:players!draft_pool_player_id_fkey (
          gamertag,
          position,
          currentTeamName
        )
      `)
      .eq('league_id', LEGENDS_LEAGUE_ID)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching draft pool:', error);
      // Check if it's a permissions/RLS issue
      if (error.message?.includes('permission') || error.message?.includes('policy')) {
        console.warn('Possible RLS (Row Level Security) issue. Check Supabase policies for draft_pool table.');
      }
      throw error;
    }
    
    // Filter by status = 'available' (case-insensitive) or null status
    const filteredData = (data || []).filter((item: DraftPoolRow & { player?: { gamertag: string; position: string | null; currentTeamName: string | null } | null }) => {
      const status = item.status?.toLowerCase();
      return !status || status === 'available';
    });
    
    return filteredData
      .map((item: DraftPoolRow & { player?: { gamertag: string; position: string | null; currentTeamName: string | null } | null }) => ({
        ...item,
        player_name: item.player?.gamertag || 'Unknown Player',
        position: item.player?.position || null,
        team: item.player?.currentTeamName || null,
      }))
      .sort((a, b) => a.player_name.localeCompare(b.player_name));
  },

  getByPosition: async (position: string): Promise<DraftPoolPlayer[]> => {
    const { data, error } = await supabase
      .from('draft_pool')
      .select(`
        *,
        player:players!draft_pool_player_id_fkey (
          gamertag,
          position,
          currentTeamName
        )
      `)
      .eq('league_id', LEGENDS_LEAGUE_ID)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching draft pool by position:', error);
      throw error;
    }
    
    // Filter by status = 'available' (case-insensitive) or null status, then by position
    const filteredData = (data || []).filter((item: DraftPoolRow & { player?: { gamertag: string; position: string | null; currentTeamName: string | null } | null }) => {
      const status = item.status?.toLowerCase();
      return (!status || status === 'available') && item.player?.position === position;
    });
    
    return filteredData
      .map((item: DraftPoolRow & { player?: { gamertag: string; position: string | null; currentTeamName: string | null } | null }) => ({
        ...item,
        player_name: item.player?.gamertag || 'Unknown Player',
        position: item.player?.position || null,
        team: item.player?.currentTeamName || null,
      }))
      .sort((a, b) => a.player_name.localeCompare(b.player_name));
  },

  search: async (searchTerm: string): Promise<DraftPoolPlayer[]> => {
    const { data, error } = await supabase
      .from('draft_pool')
      .select(`
        *,
        player:players!draft_pool_player_id_fkey (
          gamertag,
          position,
          currentTeamName
        )
      `)
      .eq('league_id', LEGENDS_LEAGUE_ID)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error searching draft pool:', error);
      throw error;
    }
    
    const searchLower = searchTerm.toLowerCase();
    
    // Filter by status = 'available' (case-insensitive) or null status, then by search term
    const filteredData = (data || []).filter((item: DraftPoolRow & { player?: { gamertag: string; position: string | null; currentTeamName: string | null } | null }) => {
      const status = item.status?.toLowerCase();
      const playerName = item.player?.gamertag?.toLowerCase() || '';
      return (!status || status === 'available') && playerName.includes(searchLower);
    });
    
    return filteredData
      .map((item: DraftPoolRow & { player?: { gamertag: string; position: string | null; currentTeamName: string | null } | null }) => ({
        ...item,
        player_name: item.player?.gamertag || 'Unknown Player',
        position: item.player?.position || null,
        team: item.player?.currentTeamName || null,
      }))
      .sort((a, b) => a.player_name.localeCompare(b.player_name));
  },
};

