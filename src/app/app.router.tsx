import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';
import type { Router } from '@remix-run/router';

import { LoginPage } from '../pages/LoginPage';
import { ErrorPage } from '../pages/ErrorPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: null,
    loader: () => redirect('/login'),
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

export const AppRouter: Router = createBrowserRouter(routes);
