import { Navigate, useRoutes } from 'react-router';
import { Link } from 'react-router-dom';

import { Routes } from '@portal-types/routes';

import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
          path: '/integrations',
          element: <NotFound title="Integrações" />,
        },
        {
          path: '/messages',
          element: <NotFound title="Mensagens" />,
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
        title: 'WhatsApp',
        icon: WhatsAppIcon,
        element: <HomePage />,
      },
      {
        path: '/messages',
        title: 'Mensagens',
        icon: ChatBubbleIcon,
        element: <p>Mensagens</p>,
      },
      {
        path: '/integrations',
        title: 'Integrações',
        icon: SettingsInputComponentIcon,
        element: <p>Integrações</p>,
      },
    ],
  },
];
