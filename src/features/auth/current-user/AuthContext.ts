import { Context, createContext } from 'react';

export interface AuthState {
  currentUser: User | null;
  loading: boolean;
}

export interface User {
  email: string;
}

const initialAuthState: AuthState = { currentUser: null, loading: false };

export const AuthContext: Context<AuthState> =
  createContext<AuthState>(initialAuthState);
