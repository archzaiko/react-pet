import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Router } from '@remix-run/router';

import { PrivateRoute } from 'features/router/PrivateRoute';
import { RootPage } from 'pages/RootPage';
import { ErrorPage } from 'pages/ErrorPage';
import { LoginPage } from 'pages/LoginPage';
import { InboxPage } from 'pages/InboxPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/inbox',
    element: (
      <PrivateRoute>
        <InboxPage />
      </PrivateRoute>
    ),
  },
];

const router: Router = createBrowserRouter(routes);

export const AppRouter = (): JSX.Element => <RouterProvider router={router} />;
