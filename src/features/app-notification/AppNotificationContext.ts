import { Context, createContext } from 'react';

export interface AppNotificationState {
  message: string | null;
  pushError(message: string): void;
  pushSuccess(message: string): void;
}

export const AppNotificationContext: Context<AppNotificationState | null> =
  createContext<AppNotificationState | null>(null);
