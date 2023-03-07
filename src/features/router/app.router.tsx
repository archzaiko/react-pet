import { createBrowserRouter, redirect, RouteObject } from 'react-router-dom';
import type { Router } from '@remix-run/router';

import { LoginPage } from '../../pages/LoginPage';
import { SignUpPage } from '../../pages/SignUpPage';
import { ErrorPage } from '../../pages/ErrorPage';
import { getCurrentUser } from '../firebase/firebase-auth';
import { InboxPage } from '../../pages/InboxPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: null,
    loader: () => {
      const currentUser: any = getCurrentUser();
      console.log(currentUser);
      return currentUser ? redirect('/inbox') : redirect('/login');
    },
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/inbox',
    element: <InboxPage />,
  },
];

export const AppRouter: Router = createBrowserRouter(routes);
