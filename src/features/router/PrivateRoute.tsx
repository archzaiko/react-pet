import { PropsWithChildren, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useCurrentUser } from '../auth/useCurrentUser';

export function PrivateRoute({ children }: PropsWithChildren): any {
  const currentUser: any = useCurrentUser();
  if (!currentUser) return <Navigate to="/login" replace />;
  return children;
}
