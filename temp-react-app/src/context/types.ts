import type { Team, Player, DraftPick } from '../services/supabase';

export interface DraftContextType {
  teams: Team[];
  players: Player[];
  draftPicks: DraftPick[];
  currentPick: number;
  isPaused: boolean;
  timeLeft: number;
  isLoading: boolean;
  error: Error | null;
  selectPlayer: (playerId: string) => void;
  skipPick: () => void;
  togglePause: () => void;
  resetDraft: () => Promise<void>;
}
