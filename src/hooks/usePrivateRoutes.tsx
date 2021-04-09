import { Navigate, useRoutes } from 'react-router';
import { Link } from 'react-router-dom';

import { Routes } from '@portal-types/routes';

import GroupIcon from '@material-ui/icons/Group';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import FinnanceIcon from '@material-ui/icons/MonetizationOn';
import PersonIcon from '@material-ui/icons/Person';

import MainLayout from 'layouts/MainLayout';
import HomePage from 'pages/Home';

const NotFound = ({ title }: { title: string }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Not Found</h1>
      <h2>{title}</h2>
    </div>
  );
};

const usePrivateRoutes = () =>
  useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/clients',
          element: <NotFound title="Carteira de clientes" />,
        },
        {
          path: '/finnance',
          element: <NotFound title="Financeiro" />,
        },
        {
          path: '/my-account',
          element: <NotFound title="Minha conta" />,
        },
        {
          path: '/help',
          element: <NotFound title="Ajuda" />,
        },
      ],
    },
    { path: '/auth/*', element: <Navigate to="/" replace /> },
    { path: '*', element: <NotFound title="Página desconhecida" /> },
  ]);

export default usePrivateRoutes;

type GroupedRoutes = { groupName: string; routes: Routes };

export const groupedRoutes: Array<GroupedRoutes> = [
  {
    groupName: 'Serviços',
    routes: [
      {
        path: '/',
        title: 'Início',
        icon: HomeIcon,
        element: <HomePage />,
      },
      {
        path: '/clients',
        title: 'Carteira de clientes',
        icon: GroupIcon,
        element: <NotFound title="Carteira de clientes" />,
      },
      {
        path: '/finnance',
        title: 'Financeiro',
        icon: FinnanceIcon,
        element: <NotFound title="Financeiro" />,
      },
    ],
  },
  {
    groupName: 'Outros',
    routes: [
      {
        path: '/my-account',
        title: 'Minha conta',
        icon: PersonIcon,
        element: <NotFound title="Minha conta" />,
      },
      {
        path: '/help',
        title: 'Ajuda',
        icon: HelpIcon,
        element: <NotFound title="Ajuda" />,
      },
    ],
  },
];
