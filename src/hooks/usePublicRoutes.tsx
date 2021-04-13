import { Navigate, useRoutes } from 'react-router';

import AuthLayout from 'layouts/AuthLayout';
import AuthRegister from 'pages/Auth/Register';

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
          path: '/register',
          element: <AuthRegister />,
        },
      ],
    },
    { path: '*', element: <Navigate to="/auth/login" replace /> },
  ]);
};

export default usePublicRoutes;
