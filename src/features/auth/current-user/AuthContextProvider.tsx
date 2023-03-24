import { PropsWithChildren, ReactElement, useMemo } from 'react';

import { useFirebaseAuthState } from 'features/firebase/auth/useFirebaseAuthState';
import { AuthContext, AuthState } from './AuthContext';

export const AuthContextProvider = ({
  children,
}: PropsWithChildren): ReactElement => {
  const [currentUser, loading] = useFirebaseAuthState();

  const authState: AuthState = useMemo(
    () => ({ currentUser, loading }),
    [currentUser, loading]
  );

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};
