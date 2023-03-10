import React, { useState } from 'react';
import { Button, Link, Paper, Stack, TextField } from '@mui/material';

import { signUp } from '../firebase/firebase-auth';

interface SignUpFormPayload {
  email: string;
  password: string;
}

export function SignUpForm(): JSX.Element {
  const [form, setForm] = useState<SignUpFormPayload>({
    email: '',
    password: '',
  });

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignUpClick = (): void => {
    signUp(form.email, form.password);
  };

  return (
    <form>
      <Paper elevation={2} sx={{ padding: '2rem' }}>
        <Stack sx={{ minWidth: '300px' }}>
          <TextField
            name="email"
            error
            type="text"
            required
            label="Email"
            helperText="Field should be defined"
            autoComplete="username"
            onChange={handleFieldChange}
          />
          <TextField
            name="password"
            error
            type="password"
            required
            label="Password"
            helperText="Field should be defined"
            autoComplete="password"
            onChange={handleFieldChange}
          />
          <Button variant="contained" onClick={handleSignUpClick}>
            SignUp
          </Button>
          <Link href="/login">Login</Link>
        </Stack>
      </Paper>
    </form>
  );
}
