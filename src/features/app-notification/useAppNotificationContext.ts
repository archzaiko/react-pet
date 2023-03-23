import { useContext } from 'react';

import {
  AppNotificationContext,
  AppNotificationState,
} from './AppNotificationContext';

export const useAppNotificationContext = (): AppNotificationState => {
  const context: AppNotificationState | null = useContext(
    AppNotificationContext
  );
  if (!context) throw new Error('AppNotificationContext is not provided');
  return context;
};
