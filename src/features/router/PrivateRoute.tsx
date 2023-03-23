import { PropsWithChildren, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { User } from 'firebase/auth';
import { CurrentUserContext } from 'features/auth/CurrentUserContext';

export const PrivateRoute = ({ children }: PropsWithChildren): JSX.Element => {
  const currentUser: User | null = useContext(CurrentUserContext);
  if (!currentUser) return <Navigate to="/login" />;
  return <>{children}</>;
};
