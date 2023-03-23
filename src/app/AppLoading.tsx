import { LinearProgress, Modal, SxProps } from '@mui/material';

const modalStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
};

const progressStyles: SxProps = {
  width: '100%',
};

export const AppLoading = (): JSX.Element => (
  <Modal open={true} sx={modalStyles}>
    <LinearProgress sx={progressStyles} />
  </Modal>
);
