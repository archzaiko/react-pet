import { useEffect, useState } from 'react';
import {
  Auth,
  User as FirebaseUser,
  Unsubscribe,
  onAuthStateChanged,
} from 'firebase/auth';

import { useFirebaseAuth } from './useFirebaseAuth';
import { User } from 'features/auth/AuthContext';

const mapFirebaseUser = (user: FirebaseUser): User => ({
  email: user.email ?? '',
});

export const useFirebaseAuthState = (): [User | null, boolean] => {
  const auth: Auth = useFirebaseAuth();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const handleUserChanged = (firebaseUser: FirebaseUser | null): void => {
    const user: User | null = firebaseUser
      ? mapFirebaseUser(firebaseUser)
      : null;
    setUser(user);
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe: Unsubscribe = onAuthStateChanged(
      auth,
      handleUserChanged
    );

    return () => unsubscribe();
  }, [auth]);

  return [user, loading];
};
