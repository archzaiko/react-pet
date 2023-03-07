import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from 'react-router-dom';
import type { Router } from '@remix-run/router';
import { LoginPage } from '../../pages/LoginPage';
import { InboxPage } from '../../pages/InboxPage';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter: Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navigate to="/inbox" />}>
      <Route path="login" element={<LoginPage />} />
      <Route
        path="inbox"
        element={
          <PrivateRoute>
            <InboxPage />
          </PrivateRoute>
        }
      />
    </Route>
  )
);
