import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { authInit } from './features/firebase/firebase-auth';

import { AppRouter } from './features/router/AppRouter';
import './index.css';

function bootstrap(): void {
  authInit().then(() => {
    const root: ReactDOM.Root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      // <StrictMode>
      <RouterProvider router={AppRouter} />
      // </StrictMode>
    );
  });
}

bootstrap();
