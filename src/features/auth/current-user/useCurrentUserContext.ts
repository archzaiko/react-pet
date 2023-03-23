import { useContext } from 'react';
import { User } from 'firebase/auth';

import { CurrentUserContext } from './CurrentUserContext';

export const useCurrentUserContext = (): User | null => {
  return useContext(CurrentUserContext);
};
