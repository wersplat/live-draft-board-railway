import { useContext } from 'react';
import { DraftContext } from './context';
import type { DraftContextType } from './types';

/**
 * Custom hook to access the draft context
 * @returns Draft context with teams, players, draft picks, and actions
 * @throws Error if used outside of a DraftProvider
 */
export const useDraft = (): DraftContextType => {
  const context = useContext(DraftContext);
  if (context === undefined) {
    throw new Error('useDraft must be used within a DraftProvider');
  }
  return context;
};
