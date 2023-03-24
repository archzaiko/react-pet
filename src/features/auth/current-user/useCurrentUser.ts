import { useContext } from 'react';

import { AuthContext, User } from './AuthContext';

export const useCurrentUser = (): User | null => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
};
