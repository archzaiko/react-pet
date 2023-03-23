import { CurrentUserContext } from 'features/auth/CurrentUserContext';
import { useAuthState } from 'features/firebase/auth/useAuthState';
import { AppRouter } from './AppRouter';
import { AppLoading } from './AppLoading';
import { AppNotification } from './AppNotification';

export const App = (): JSX.Element => {
  const [currentUser, authLoading] = useAuthState();

  if (authLoading) return <AppLoading />;
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <AppRouter></AppRouter>
      </CurrentUserContext.Provider>
      <AppNotification message="err" status="ok" />
    </>
  );
};
