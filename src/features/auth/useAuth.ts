import { signIn } from 'features/firebase/auth/firebase-auth.api';

export interface Auth {
  login(email: string, password: string): Promise<void>;
  signup(email: string, password: string): Promise<void>;
}

export const useAuth = (): Auth => {
  const login = async (email: string, password: string): Promise<void> => {
    await signIn(email, password);
  };

  const signup = async (email: string, password: string): Promise<void> => {
    await signIn(email, password);
  };

  return { login, signup };
};
