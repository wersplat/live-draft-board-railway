import { useState, useEffect, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { teamsApi, playersApi, draftPicksApi, type Team, type Player, type DraftPick } from '../../services/supabase';
import { useToast } from '../../hooks/useToast';
import type { DraftContextType } from './types';

const DRAFT_DURATION = 60; // 60 seconds per pick

export const useDraft = (): DraftContextType => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  
  // State for draft control
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(DRAFT_DURATION);
  const [currentPick, setCurrentPick] = useState(1);
  
  // Fetch teams, players, and draft picks
  const { data: teams = [], isLoading: isLoadingTeams } = useQuery<Team[]>({
    queryKey: ['teams'],
    queryFn: teamsApi.getAll,
  });

  const { data: players = [], isLoading: isLoadingPlayers } = useQuery<Player[]>({
    queryKey: ['players'],
    queryFn: playersApi.getAll,
  });

  const { data: draftPicks = [], isLoading: isLoadingDraftPicks } = useQuery<DraftPick[]>({
    queryKey: ['draftPicks'],
    queryFn: draftPicksApi.getAll,
  });

  // Skip the current pick
  const skipPick = useCallback(() => {
    setCurrentPick(prev => prev + 1);
    setTimeLeft(DRAFT_DURATION);
    toast('Pick skipped', 'info');
  }, [toast]);

  // Timer effect
  useEffect(() => {
    if (isPaused || isLoadingDraftPicks) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-skip if time runs out
          skipPick();
          return DRAFT_DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused, isLoadingDraftPicks, skipPick]);

  // Mutation for selecting a player
  const selectPlayerMutation = useMutation({
    mutationFn: async (playerId: string) => {
      const currentTeam = teams[(currentPick - 1) % teams.length];
      if (!currentTeam) throw new Error('No team found for current pick');
      
      await playersApi.draftPlayer(playerId, currentTeam.id, currentPick);
      
      // Invalidate queries to refetch data
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['players'] }),
        queryClient.invalidateQueries({ queryKey: ['draftPicks'] }),
      ]);
      
      // Move to next pick
      setCurrentPick(prev => prev + 1);
      setTimeLeft(DRAFT_DURATION);
    },
    onError: (error) => {
      console.error('Error selecting player:', error);
      toast('Failed to select player', 'error');
    },
  });

  // Toggle pause state
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
    toast(isPaused ? 'Draft resumed' : 'Draft paused', 'info');
  }, [isPaused, toast]);

  // Reset the draft
  const resetDraft = useCallback(async () => {
    try {
      await draftPicksApi.resetDraft();
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['players'] }),
        queryClient.invalidateQueries({ queryKey: ['draftPicks'] }),
      ]);
      setCurrentPick(1);
      setTimeLeft(DRAFT_DURATION);
      setIsPaused(false);
      toast('Draft reset successfully', 'success');
    } catch (error) {
      console.error('Error resetting draft:', error);
      toast('Failed to reset draft', 'error');
    }
  }, [queryClient, toast]);

  return {
    teams,
    players: players.filter(p => p.available),
    draftPicks,
    currentPick,
    isPaused,
    timeLeft,
    isLoading: isLoadingTeams || isLoadingPlayers || isLoadingDraftPicks,
    selectPlayer: selectPlayerMutation.mutateAsync,
    skipPick,
    togglePause,
    resetDraft,
  };
};
