// This file is maintained for backward compatibility
// New code should import directly from './DraftContext' (the directory)

export { DraftProvider, useDraft } from './DraftContext/index';

// Create and export a default object for backward compatibility
const DraftContext = {
  Provider: (await import('./DraftContext/index')).DraftProvider,
  useDraft: (await import('./DraftContext/index')).useDraft,
};

export default DraftContext;
