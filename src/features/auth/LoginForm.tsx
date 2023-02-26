import { Button, Paper, Stack, TextField } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function LoginForm(): JSX.Element {
  console.log('LoginForm function');

  const [clicks, setClicks]: [number, Dispatch<SetStateAction<number>>] =
    useState(0);

  useEffect(() => {
    console.log('setup');
    return () => {
      console.log('cleanup');
    };
  });

  const handleLoginClick = (): void => {
    setClicks(clicks + 1);
    console.log('click', clicks);
  };

  return (
    <form>
      {clicks}
      <Paper elevation={2} sx={{ padding: '2rem' }}>
        <Stack sx={{ minWidth: '300px' }}>
          <TextField
            error
            type="text"
            required
            label="Username"
            helperText="Field should be defined"
            autoComplete="username"
          />
          <TextField
            error
            type="password"
            required
            label="Password"
            helperText="Field should be defined"
            autoComplete="password"
          />
          <Button variant="contained" onClick={handleLoginClick}>
            Login
          </Button>
        </Stack>
      </Paper>
    </form>
  );
}
