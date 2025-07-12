import { createContext } from 'react';
import type { DraftContextType } from './types';

export const DraftContext = createContext<DraftContextType | undefined>(undefined);
