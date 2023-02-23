import React from 'react';
import { useRoutes, RouteObject, Navigate } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import Login from 'pages/Login';
import Logout from 'pages/Logout';
import Home from 'pages/Home';

export const AppRoutes = {
  default: '/',
  login: '/login',
  logout: '/logout',
  home: '/home',
  // route2: 'route2',
};

const routes: RouteObject[] = [
  {
    path: AppRoutes.login,
    element: <Login />,
  },
  {
    path: AppRoutes.logout,
    element: <Logout />,
  },
  {
    path: AppRoutes.home,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to='/home' replace />
  }

];

const AppRouter = () => {
  const renderRoutes = useRoutes(routes);
  return renderRoutes;
};

export default AppRouter;