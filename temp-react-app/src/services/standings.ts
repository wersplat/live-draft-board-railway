import { supabase } from '../lib/supabase';
import { LEGENDS_LEAGUE_ID } from './supabase';

export type Standing = {
  team_id: string;
  team_name: string;
  wins: number;
  losses: number;
  win_percentage: number;
  games_played: number;
};

export const standingsApi = {
  getAll: async (): Promise<Standing[]> => {
    // Query matches filtered by Legends Basketball Association league_id
    let matches, error;
    
    try {
      const result = await supabase
        .from('v_matches_with_primary_context')
        .select('team_a_id, team_b_id, winner_id, league_id, team1:teams!v_matches_with_primary_context_team_a_id_fkey(name), team2:teams!v_matches_with_primary_context_team_b_id_fkey(name)')
        .eq('league_id', LEGENDS_LEAGUE_ID);
      matches = result.data;
      error = result.error;
    } catch (err) {
      // Fallback to matches table if view doesn't exist
      const result = await supabase
        .from('matches')
        .select('team1_id, team2_id, winner_id, league_id, team1:teams!matches_team1_id_fkey(name), team2:teams!matches_team2_id_fkey(name)')
        .eq('league_id', LEGENDS_LEAGUE_ID);
      matches = result.data;
      error = result.error;
    }
    
    if (error) {
      console.error('Error fetching matches for standings:', error);
      throw error;
    }
    
    // Calculate standings from matches
    const standingsMap = new Map<string, Standing>();
    
    (matches || []).forEach((match: any) => {
      const team1Id = match.team_a_id || match.team1_id;
      const team2Id = match.team_b_id || match.team2_id;
      const team1Name = match.team1?.name || match.team_a?.name || 'Unknown Team';
      const team2Name = match.team2?.name || match.team_b?.name || 'Unknown Team';
      const winnerId = match.winner_id;
      
      // Initialize team1 if not exists
      if (!standingsMap.has(team1Id)) {
        standingsMap.set(team1Id, {
          team_id: team1Id,
          team_name: team1Name,
          wins: 0,
          losses: 0,
          games_played: 0,
          win_percentage: 0,
        });
      }
      
      // Initialize team2 if not exists
      if (!standingsMap.has(team2Id)) {
        standingsMap.set(team2Id, {
          team_id: team2Id,
          team_name: team2Name,
          wins: 0,
          losses: 0,
          games_played: 0,
          win_percentage: 0,
        });
      }
      
      const team1 = standingsMap.get(team1Id)!;
      const team2 = standingsMap.get(team2Id)!;
      
      team1.games_played++;
      team2.games_played++;
      
      if (winnerId === team1Id) {
        team1.wins++;
        team2.losses++;
      } else if (winnerId === team2Id) {
        team2.wins++;
        team1.losses++;
      }
    });
    
    // Calculate win percentages and sort
    const standings = Array.from(standingsMap.values()).map(standing => ({
      ...standing,
      win_percentage: standing.games_played > 0 
        ? standing.wins / standing.games_played 
        : 0,
    }));
    
    // Sort by win percentage (descending), then by wins
    standings.sort((a, b) => {
      if (b.win_percentage !== a.win_percentage) {
        return b.win_percentage - a.win_percentage;
      }
      return b.wins - a.wins;
    });
    
    return standings;
  },
};

