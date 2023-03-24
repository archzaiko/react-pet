import { Container, SxProps } from '@mui/material';

import { LoginForm } from 'features/auth/components/LoginForm';
import { useCurrentUser } from 'features/auth/useCurrentUser';
import { AnimatedPage } from 'features/components/AnimatedPage';
import { Navigate } from 'react-router-dom';

const containerStyles: SxProps = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const LoginPage = (): JSX.Element => {
  const user = useCurrentUser();
  if (user) return <Navigate to="/" />;

  return (
    <AnimatedPage>
      <Container sx={containerStyles}>
        <LoginForm />
      </Container>
    </AnimatedPage>
  );
};
