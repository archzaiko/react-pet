import {
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { AuthApi } from 'features/auth/useAuthApi';

export const useFirebaseAuthApi = (): AuthApi => {
  const auth: Auth = getAuth();

  const login = async (email: string, password: string): Promise<void> => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signup = async (email: string, password: string): Promise<void> => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return { login, signup };
};
