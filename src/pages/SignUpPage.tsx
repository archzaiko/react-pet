import { Container, SxProps } from '@mui/material';

import { SignUpForm } from '../features/auth/SignUpForm';

const containerStyles: SxProps = {
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export function SignUpPage(): JSX.Element {
  return (
    <Container sx={containerStyles}>
      <SignUpForm />
    </Container>
  );
}
