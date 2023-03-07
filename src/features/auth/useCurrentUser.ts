import { getCurrentUser } from '../firebase/firebase-auth';

export const useCurrentUser = (): any => getCurrentUser();
