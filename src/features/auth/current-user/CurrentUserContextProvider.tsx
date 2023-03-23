import { useFirebaseAuthState } from 'features/firebase/auth/useFirebaseAuthState';
import { PropsWithChildren, ReactElement } from 'react';

import { CurrentUserContext } from './CurrentUserContext';

export const CurrentUserContextProvider = ({
  children,
}: PropsWithChildren): ReactElement<typeof CurrentUserContext.Provider> => {
  const [currentUser] = useFirebaseAuthState();

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};
