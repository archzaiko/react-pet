import { AlertColor } from '@mui/material';
import { PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { AppNotification } from './AppNotification';
import {
  AppNotificationContext,
  AppNotificationState,
} from './AppNotificationContext';

interface AppNotificationConfig {
  message: string | null;
  status: AlertColor;
}

export const AppNotificationContextProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [config, setConfig] = useState<AppNotificationConfig>({
    message: null,
    status: 'info',
  });

  const pushNotification = (message: string, status: AlertColor): void => {
    setConfig({ message, status });
  };

  const pushError = useCallback((message: string): void => {
    return pushNotification(message, 'error');
  }, []);

  const pushSuccess = useCallback((message: string): void => {
    return pushNotification(message, 'success');
  }, []);

  const contextValue: AppNotificationState = useMemo(
    () => ({
      message: config.message,
      pushError,
      pushSuccess,
    }),
    [config.message, pushError, pushSuccess]
  );

  const renderAppNotification = (
    state: AppNotificationState | null
  ): JSX.Element | null => {
    return state && state.message ? (
      <AppNotification
        key={Date.now()}
        message={state.message}
        status={config.status}
      />
    ) : null;
  };

  return (
    <AppNotificationContext.Provider value={contextValue}>
      {children}
      <AppNotificationContext.Consumer>
        {renderAppNotification}
      </AppNotificationContext.Consumer>
    </AppNotificationContext.Provider>
  );
};
