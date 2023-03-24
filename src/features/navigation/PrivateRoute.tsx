import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useCurrentUser } from 'features/auth/current-user/useCurrentUser';
import { User } from 'features/auth/current-user/AuthContext';

export const PrivateRoute = (): ReactElement => {
  const currentUser: User | null = useCurrentUser();
  if (!currentUser) return <Navigate to="/login" />;
  return <Outlet />;
};
