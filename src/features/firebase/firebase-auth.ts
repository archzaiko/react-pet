import {
  Auth,
  User,
  UserCredential,
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  initializeAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseApp } from './firebase-app';

const auth: Auth = initializeAuth(firebaseApp, {
  persistence: browserLocalPersistence,
});

export const authInit = (): Promise<void> => {
  return new Promise<void>((resolve: any, reject: any) => {
    auth.onAuthStateChanged(
      () => resolve(),
      (error: any) => reject(error)
    );
  });
};

export const signUp = (
  email: string,
  password: string
): Promise<UserCredential> =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (
  email: string,
  password: string
): Promise<UserCredential> => signInWithEmailAndPassword(auth, email, password);

export const getCurrentUser = (): User | null => auth.currentUser;
