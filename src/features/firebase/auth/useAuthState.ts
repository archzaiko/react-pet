import { useState } from 'react';
import {
  Auth,
  User,
  browserLocalPersistence,
  initializeAuth,
  onAuthStateChanged,
} from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';
import { useApp } from '../useApp';

export const useAuthState = (): [User | null, boolean, boolean] => {
  const app: FirebaseApp = useApp();
  const auth: Auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
  });
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  onAuthStateChanged(
    auth,
    (user: User | null) => {
      setUser(user);
      setLoading(false);
    },
    () => {
      setError(true);
      setLoading(false);
    }
  );

  return [user, loading, error];
};
