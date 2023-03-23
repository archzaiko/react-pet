import { useEffect, useState } from 'react';
import { Auth, Unsubscribe, User, onAuthStateChanged } from 'firebase/auth';

import { useFirebaseAuth } from './useFirebaseAuth';

export const useFirebaseAuthState = (): [User | null, boolean] => {
  console.log('useAuthState');
  const auth: Auth = useFirebaseAuth();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const handleUserChanged = (user: User | null): void => {
    console.log('setUser');
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    console.log('onAuthStateChanged');
    const unsubscribe: Unsubscribe = onAuthStateChanged(
      auth,
      handleUserChanged
    );

    return () => unsubscribe();
  }, [auth]);

  return [user, loading];
};
