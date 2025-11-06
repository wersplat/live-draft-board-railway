import { supabase } from '../lib/supabase';
import { LEGENDS_LEAGUE_ID } from './supabase';

export type LeagueStatistics = {
  total_teams: number;
  total_players: number;
  total_matches: number;
  average_points_per_game: number;
  top_scorer?: {
    player_id: string;
    player_name: string;
    total_points: number;
  };
};

export const statisticsApi = {
  getLeagueStats: async (): Promise<LeagueStatistics> => {
    // Get total teams (all teams, not filtered by league)
    const { count: teamCount } = await supabase
      .from('teams')
      .select('*', { count: 'exact', head: true });
    
    // Get total players (all players, not filtered by league)
    const { count: playerCount } = await supabase
      .from('players')
      .select('*', { count: 'exact', head: true });
    
    // Get total matches filtered by Legends Basketball Association league_id
    let matchCount = 0;
    try {
      const result = await supabase
        .from('v_matches_with_primary_context')
        .select('*', { count: 'exact', head: true })
        .eq('league_id', LEGENDS_LEAGUE_ID);
      matchCount = result.count || 0;
    } catch (err) {
      // Fallback to matches table if view doesn't exist
      const result = await supabase
        .from('matches')
        .select('*', { count: 'exact', head: true })
        .eq('league_id', LEGENDS_LEAGUE_ID);
      matchCount = result.count || 0;
    }
    
    // Get player stats for top scorer filtered by league (if player_stats table exists)
    let topScorer = undefined;
    try {
      // Try to get top scorer from league-specific player stats
      const { data: playerStats } = await supabase
        .from('player_stats')
        .select('player_id, player_name, points, match_id')
        .order('points', { ascending: false })
        .limit(100);
      
      if (playerStats && playerStats.length > 0) {
        // Filter by matches in Legends league
        let matchIds;
        try {
          const result = await supabase
            .from('v_matches_with_primary_context')
            .select('id')
            .eq('league_id', LEGENDS_LEAGUE_ID);
          matchIds = result.data;
        } catch (err) {
          const result = await supabase
            .from('matches')
            .select('id')
            .eq('league_id', LEGENDS_LEAGUE_ID);
          matchIds = result.data;
        }
        
        const legendsMatchIds = new Set((matchIds || []).map((m: any) => m.id));
        const legendsPlayerStats = playerStats.filter((stat: any) => 
          legendsMatchIds.has(stat.match_id)
        );
        
        if (legendsPlayerStats.length > 0) {
          // Find player with most total points
          const playerTotals = new Map<string, { name: string; total: number }>();
          legendsPlayerStats.forEach((stat: any) => {
            const current = playerTotals.get(stat.player_id) || { name: stat.player_name || 'Unknown', total: 0 };
            playerTotals.set(stat.player_id, {
              name: current.name,
              total: current.total + (stat.points || 0),
            });
          });
          
          const topPlayer = Array.from(playerTotals.entries())
            .sort((a, b) => b[1].total - a[1].total)[0];
          
          if (topPlayer) {
            topScorer = {
              player_id: topPlayer[0],
              player_name: topPlayer[1].name,
              total_points: topPlayer[1].total,
            };
          }
        }
      }
    } catch (error) {
      // Table might not exist, ignore
      console.log('player_stats table not available');
    }
    
    // Calculate average points (if available) filtered by league
    let avgPoints = 0;
    try {
      let matchIds;
      try {
        const result = await supabase
          .from('v_matches_with_primary_context')
          .select('id')
          .eq('league_id', LEGENDS_LEAGUE_ID);
        matchIds = result.data;
      } catch (err) {
        const result = await supabase
          .from('matches')
          .select('id')
          .eq('league_id', LEGENDS_LEAGUE_ID);
        matchIds = result.data;
      }
      
      const legendsMatchIds = (matchIds || []).map((m: any) => m.id);
      
      if (legendsMatchIds.length > 0) {
        const { data: allStats } = await supabase
          .from('player_stats')
          .select('points')
          .in('match_id', legendsMatchIds);
        
        if (allStats && allStats.length > 0) {
          const totalPoints = allStats.reduce((sum, stat) => sum + (stat.points || 0), 0);
          avgPoints = totalPoints / allStats.length;
        }
      }
    } catch (error) {
      // Table might not exist, ignore
      console.log('player_stats table not available for average calculation');
    }
    
    return {
      total_teams: teamCount || 0,
      total_players: playerCount || 0,
      total_matches: matchCount || 0,
      average_points_per_game: avgPoints,
      top_scorer: topScorer,
    };
  },
};

