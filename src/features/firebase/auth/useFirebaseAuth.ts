import { useMemo } from 'react';
import { FirebaseApp } from 'firebase/app';
import {
  Auth,
  Dependencies,
  browserLocalPersistence,
  initializeAuth,
} from 'firebase/auth';

import { useFirebaseApp } from '../useFirebaseApp';

const authDeps: Dependencies = {
  persistence: browserLocalPersistence,
};

export const useFirebaseAuth = (): Auth => {
  const app: FirebaseApp = useFirebaseApp();
  return useMemo(() => initializeAuth(app, authDeps), [app]);
};
