import { User, getAuth } from 'firebase/auth';

export const useCurrentUser = (): User | null => {
  return getAuth().currentUser;
};
