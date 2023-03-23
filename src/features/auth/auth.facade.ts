import { createUser, signIn } from 'features/firebase/auth/firebase-auth.api';

export const login = async (email: string, password: string): Promise<void> => {
  await signIn(email, password);
};

export const signUp = async (
  email: string,
  password: string
): Promise<void> => {
  await createUser(email, password);
};
