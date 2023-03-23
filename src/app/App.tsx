import { useFirebaseAuthState } from 'features/firebase/auth/useFirebaseAuthState';
import { AppNotificationContextProvider } from 'features/app-notification/AppNotificationContextProvider';
import { CurrentUserContextProvider } from 'features/auth/current-user/CurrentUserContextProvider';

import { AppRouter } from './AppRouter';
import { AppLoading } from './AppLoading';

export const App = (): JSX.Element => {
  const [currentUser, authLoading] = useFirebaseAuthState();
  console.log('App currentUser', currentUser);

  if (authLoading) return <AppLoading />;
  return (
    <AppNotificationContextProvider>
      <CurrentUserContextProvider>
        <AppRouter></AppRouter>
      </CurrentUserContextProvider>
    </AppNotificationContextProvider>
  );
};
