// This file is a barrel file that re-exports the public API of the AuthContext
// It helps organize imports and prevents circular dependencies

export { AuthProvider } from './AuthContext/AuthProvider';
export { useAuth } from './AuthContext/useAuth';
export type { AuthContextType } from './AuthContext/context';
