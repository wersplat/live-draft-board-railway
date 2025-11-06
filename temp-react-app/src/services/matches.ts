import { supabase } from '../lib/supabase';
import { LEGENDS_LEAGUE_ID } from './supabase';

export type Match = {
  id: string;
  match_date: string;
  team1_id: string;
  team2_id: string;
  team1_name?: string;
  team2_name?: string;
  team1_score?: number;
  team2_score?: number;
  winner_id?: string;
  created_at: string;
};

export const matchesApi = {
  getRecent: async (limit: number = 25): Promise<Match[]> => {
    // Try v_matches_with_primary_context first, fallback to matches table
    let data, error;
    
    try {
      const result = await supabase
        .from('v_matches_with_primary_context')
        .select(`
          id,
          played_at,
          team_a_id,
          team_b_id,
          score_a,
          score_b,
          winner_id,
          league_id,
          team1:teams!v_matches_with_primary_context_team_a_id_fkey(name),
          team2:teams!v_matches_with_primary_context_team_b_id_fkey(name)
        `)
        .eq('league_id', LEGENDS_LEAGUE_ID)
        .order('played_at', { ascending: false })
        .limit(limit);
      data = result.data;
      error = result.error;
    } catch (err) {
      // Fallback to matches table if view doesn't exist
      const result = await supabase
        .from('matches')
        .select(`
          id,
          played_at,
          team1_id,
          team2_id,
          team1_score,
          team2_score,
          winner_id,
          league_id,
          team1:teams!matches_team1_id_fkey(name),
          team2:teams!matches_team2_id_fkey(name)
        `)
        .eq('league_id', LEGENDS_LEAGUE_ID)
        .order('played_at', { ascending: false })
        .limit(limit);
      data = result.data;
      error = result.error;
    }
    
    if (error) {
      console.error('Error fetching matches:', error);
      throw error;
    }
    
    // Transform the data to flatten team names
    return (data || []).map((match: any) => {
      // Handle team data - it might be an array or single object
      const team1Name = Array.isArray(match.team1)
        ? (match.team1[0]?.name || 'Unknown Team')
        : (match.team1?.name || match.team_a?.name || 'Unknown Team');
      
      const team2Name = Array.isArray(match.team2)
        ? (match.team2[0]?.name || 'Unknown Team')
        : (match.team2?.name || match.team_b?.name || 'Unknown Team');
      
      return {
        id: match.id,
        match_date: match.played_at || '',
        team1_id: match.team_a_id || match.team1_id || '',
        team2_id: match.team_b_id || match.team2_id || '',
        team1_name: team1Name,
        team2_name: team2Name,
        team1_score: match.score_a || match.team1_score || undefined,
        team2_score: match.score_b || match.team2_score || undefined,
        winner_id: match.winner_id || undefined,
        created_at: match.played_at || '',
      };
    });
  },

  getById: async (id: string): Promise<Match | null> => {
    let data: any, error;
    
    try {
      const result = await supabase
        .from('v_matches_with_primary_context')
        .select(`
          id,
          played_at,
          team_a_id,
          team_b_id,
          score_a,
          score_b,
          winner_id,
          league_id,
          team1:teams!v_matches_with_primary_context_team_a_id_fkey(name),
          team2:teams!v_matches_with_primary_context_team_b_id_fkey(name)
        `)
        .eq('id', id)
        .eq('league_id', LEGENDS_LEAGUE_ID)
        .single();
      data = result.data;
      error = result.error;
    } catch (err) {
      // Fallback to matches table
      const result = await supabase
        .from('matches')
        .select(`
          id,
          played_at,
          team1_id,
          team2_id,
          team1_score,
          team2_score,
          winner_id,
          league_id,
          team1:teams!matches_team1_id_fkey(name),
          team2:teams!matches_team2_id_fkey(name)
        `)
        .eq('id', id)
        .eq('league_id', LEGENDS_LEAGUE_ID)
        .single();
      data = result.data;
      error = result.error;
    }
    
    if (error || !data) return null;
    
    // Handle team data - it might be an array or single object
    const team1Name = Array.isArray(data.team1) 
      ? (data.team1[0]?.name || 'Unknown Team')
      : (data.team1?.name || data.team_a?.name || 'Unknown Team');
    
    const team2Name = Array.isArray(data.team2)
      ? (data.team2[0]?.name || 'Unknown Team')
      : (data.team2?.name || data.team_b?.name || 'Unknown Team');
    
    return {
      id: data.id,
      match_date: data.played_at || '',
      team1_id: data.team_a_id || data.team1_id || '',
      team2_id: data.team_b_id || data.team2_id || '',
      team1_name: team1Name,
      team2_name: team2Name,
      team1_score: data.score_a || data.team1_score || undefined,
      team2_score: data.score_b || data.team2_score || undefined,
      winner_id: data.winner_id || undefined,
      created_at: data.played_at || '',
    };
  },
};

