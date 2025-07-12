import { useCallback } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import type { Team } from '../services/supabase';
import { 
  teamsApi, 
  playersApi, 
  draftPicksApi, 
  subscribeToDraftUpdates, 
  subscribeToPlayerUpdates 
} from '../services/supabase';

export const useDraft = () => {
  const queryClient = useQueryClient();

  // Teams query
  const teamsQuery = {
    queryKey: ['teams'],
    queryFn: teamsApi.getAll,
  };

  // Players query
  const playersQuery = {
    queryKey: ['players'],
    queryFn: playersApi.getAll,
  };

  // Draft picks query
  const draftPicksQuery = {
    queryKey: ['draftPicks'],
    queryFn: draftPicksApi.getAll,
  };

  // Real-time subscription to updates
  const setupRealtimeSubscriptions = useCallback(() => {
    const unsubscribeDraft = subscribeToDraftUpdates(() => {
      queryClient.invalidateQueries({ queryKey: ['draftPicks'] });
    });

    const unsubscribePlayers = subscribeToPlayerUpdates(() => {
      queryClient.invalidateQueries({ queryKey: ['players'] });
    });

    return () => {
      unsubscribeDraft();
      unsubscribePlayers();
    };
  }, [queryClient]);

  // Select player for draft
  const selectPlayer = useCallback(async (
    playerId: string, 
    currentPick: number, 
    teams: Team[],
    onSuccess?: () => void
  ) => {
    if (!teams.length) {
      console.error('No teams available');
      return;
    }
    
    const teamIndex = (currentPick - 1) % teams.length;
    const teamId = teams[teamIndex].id;
    
    try {
      await playersApi.draftPlayer(playerId, teamId, currentPick);
      onSuccess?.();
      
      // Invalidate queries to refresh data
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['draftPicks'] }),
        queryClient.invalidateQueries({ queryKey: ['players'] })
      ]);
    } catch (error) {
      console.error('Error selecting player:', error);
      throw error;
    }
  }, [queryClient]);

  // Reset draft
  const resetDraft = useCallback(async () => {
    try {
      await draftPicksApi.resetDraft();
      
      // Invalidate all relevant queries
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['draftPicks'] }),
        queryClient.invalidateQueries({ queryKey: ['players'] })
      ]);
    } catch (error) {
      console.error('Error resetting draft:', error);
      throw error;
    }
  }, [queryClient]);

  return {
    teamsQuery,
    playersQuery,
    draftPicksQuery,
    setupRealtimeSubscriptions,
    selectPlayer,
    resetDraft,
  };
};

export default useDraft;
