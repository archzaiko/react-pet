import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Router } from '@remix-run/router';

import { PrivateRoute } from 'features/navigation/PrivateRoute';
import { RootPage } from 'pages/RootPage';
import { ErrorPage } from 'pages/ErrorPage';
import { LoginPage } from 'pages/LoginPage';
import { InboxPage } from 'pages/InboxPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <RootPage />,
        children: [{ path: 'inbox', element: <InboxPage /> }],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

const router: Router = createBrowserRouter(routes);

export const AppRouter = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
