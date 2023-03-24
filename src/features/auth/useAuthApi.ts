import { useFirebaseAuthApi } from 'features/firebase/auth/useFirebaseAuthApi';

export interface AuthApi {
  login(email: string, password: string): Promise<void>;
  signup(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}

export const useAuthApi = (): AuthApi => {
  return useFirebaseAuthApi();
};
