'use client'

import { type ReactNode, useMemo } from 'react';
import { DraftContext } from './context';
import { useDraft } from './useDraft';
import type { DraftContextType } from './types';

type DraftProviderProps = {
  children: ReactNode;
};

export function DraftProvider({ children }: DraftProviderProps) {
  const draft = useDraft();

  const contextValue = useMemo<DraftContextType>(
    () => ({
      ...draft,
    }),
    [draft]
  );

  return (
    <DraftContext.Provider value={contextValue}>
      {children}
    </DraftContext.Provider>
  );
}

export default DraftProvider;
