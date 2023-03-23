import {
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const createUser = (
  email: string,
  password: string
): Promise<UserCredential> =>
  createUserWithEmailAndPassword(getAuth(), email, password);

export const signIn = (
  email: string,
  password: string
): Promise<UserCredential> =>
  signInWithEmailAndPassword(getAuth(), email, password);
