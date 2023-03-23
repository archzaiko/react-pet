import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

import { User } from 'firebase/auth';
import { useCurrentUserContext } from 'features/auth/current-user/useCurrentUserContext';

export const PrivateRoute = ({ children }: PropsWithChildren): JSX.Element => {
  const currentUser: User | null = useCurrentUserContext();
  console.log('PrivateRoute', currentUser);
  if (!currentUser) return <Navigate to="/login" />;
  return <>{children}</>;
};
