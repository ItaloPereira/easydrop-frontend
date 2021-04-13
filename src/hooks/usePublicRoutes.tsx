import { Navigate, useRoutes } from 'react-router';

import AuthLayout from 'layouts/AuthLayout';
import AuthLogin from 'pages/Auth/Login';

const usePublicRoutes = () => {
  return useRoutes([
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: '/',
          element: <Navigate to="/auth/login" replace />,
        },
        {
          path: '/login',
          element: <AuthLogin />,
        },
      ],
    },
    { path: '*', element: <Navigate to="/auth/login" replace /> },
  ]);
};

export default usePublicRoutes;
