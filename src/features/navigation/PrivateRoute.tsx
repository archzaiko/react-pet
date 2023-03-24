import { ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useCurrentUser } from 'features/auth/useCurrentUser';
import { User } from 'features/auth/AuthContext';

export const PrivateRoute = (): ReactElement => {
  const currentUser: User | null = useCurrentUser();
  if (!currentUser) return <Navigate to="/login" />;
  return <Outlet />;
};
