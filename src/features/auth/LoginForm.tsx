import { useState } from 'react';
import { Button, Link, Paper, Stack, TextField } from '@mui/material';

interface LoginFormPayload {
  email: string;
  password: string;
}

export function LoginForm(): JSX.Element {
  const [form, setForm] = useState<LoginFormPayload>({
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

  const handleLoginClick = (): void => {
    // signIn(form.email, form.password);
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
            label="Username"
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
          <Button variant="contained" onClick={handleLoginClick}>
            Login
          </Button>
          <Link href="/signup">Create user</Link>
        </Stack>
      </Paper>
    </form>
  );
}
