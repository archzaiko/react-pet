import { FormikErrors, useFormik } from 'formik';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import {
  Button,
  FormControl,
  Link,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { useAppNotificationContext } from 'features/app-notification/useAppNotificationContext';
import { useAuth } from '../useAuth';

interface LoginFormPayload {
  email: string;
  password: string;
}

const initialValues: LoginFormPayload = {
  email: 'user@dev.com',
  password: 'password',
};

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
  const auth = useAuth();
  const navigate: NavigateFunction = useNavigate();
  const notificationContext = useAppNotificationContext();

  const onSubmit = (values: LoginFormPayload): void => {
    auth
      .login(values.email, values.password)
      .then(() => navigate('/inbox'))
      .catch(() =>
        notificationContext.pushError('Login is failed. Check your credentials')
      );
  };

  const formik = useFormik<LoginFormPayload>({
    initialValues,
    validate,
    onSubmit,
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
