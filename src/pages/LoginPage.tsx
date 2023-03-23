import { Container, SxProps } from '@mui/material';

import { LoginForm } from '../features/auth/components/LoginForm';

const containerStyles: SxProps = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const LoginPage = (): JSX.Element => {
  return (
    <Container sx={containerStyles}>
      <LoginForm />
    </Container>
  );
};
