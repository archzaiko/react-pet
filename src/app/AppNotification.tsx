import { Snackbar } from '@mui/material';

interface AppNotificationProps {
  message: string;
  status: string;
}

export const AppNotification = ({
  message,
  status,
}: AppNotificationProps): JSX.Element => {
  return <Snackbar open={true} autoHideDuration={6000} message={message} />;
};
