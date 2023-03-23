import { Navigate } from 'react-router-dom';

export const RootPage = (): JSX.Element => {
  return <Navigate to="/inbox" />;
};
