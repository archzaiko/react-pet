import { FormikErrors, useFormik } from 'formik';

import {
  Button,
  FormControl,
  Link,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { login } from '../auth.facade';

interface LoginFormPayload {
  email: string;
  password: string;
}

const validate = (values: LoginFormPayload): FormikErrors<LoginFormPayload> => {
  const errors: FormikErrors<LoginFormPayload> = {};

  if (!values.email) {
    errors.email = 'Field should be defined';
  }

  if (!values.password) {
    errors.password = 'Field should be defined';
  }

  return errors;
};

export function LoginForm(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();

  const formik = useFormik<LoginFormPayload>({
    initialValues: {
      email: 'user@dev.com',
      password: 'password',
    },
    validate,
    onSubmit: (values: LoginFormPayload) => {
      login(values.email, values.password)
        .then(() => {
          navigate('/inbox');
        })
        .catch((error: unknown) => {
          formik.setStatus('error');
        });
    },
  });

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Paper elevation={2} sx={{ padding: '2rem' }}>
        <Stack spacing={2} sx={{ minWidth: '400px' }}>
          <FormControl>
            <TextField
              name="email"
              type="text"
              required
              error={!!formik.errors.email}
              helperText={formik.errors.email}
              label="Username"
              autoComplete="username"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </FormControl>

          <TextField
            name="password"
            type="password"
            required
            error={!!formik.errors.password}
            helperText={formik.errors.password}
            label="Password"
            autoComplete="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Link href="/signup">Create user</Link>
        </Stack>
      </Paper>
    </form>
  );
}
