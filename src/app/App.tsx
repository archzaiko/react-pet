import { ReactElement } from 'react';

import { AppNotificationContextProvider } from 'features/app-notification/AppNotificationContextProvider';
import { AuthContext, AuthState } from 'features/auth/current-user/AuthContext';
import { AppRouter } from './AppRouter';
import { AppLoading } from './AppLoading';
import { AuthContextProvider } from 'features/auth/current-user/AuthContextProvider';

export const App = (): JSX.Element => {
  const renderApp = (loading: boolean): ReactElement =>
    loading ? <AppLoading /> : <AppRouter />;

  return (
    <AppNotificationContextProvider>
      <AuthContextProvider>
        <AuthContext.Consumer>
          {({ loading }: AuthState) => renderApp(loading)}
        </AuthContext.Consumer>
      </AuthContextProvider>
    </AppNotificationContextProvider>
  );
};
