import { Alert, AlertColor, Snackbar } from '@mui/material';
import { useState } from 'react';

interface AppNotificationProps {
  message: string;
  status: AlertColor;
}

export const AppNotification = ({
  message,
  status,
}: AppNotificationProps): JSX.Element => {
  const [open, setOpen] = useState(true);
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      message={message}
      onClose={() => setOpen(false)}
    >
      <Alert severity={status}>{message}</Alert>
    </Snackbar>
  );
};
