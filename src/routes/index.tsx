import usePrivateRoutes from 'hooks/usePrivateRoutes';
import usePublicRoutes from 'hooks/usePublicRoutes';

import AuthGuardian from './authGuard';

export const AppRoutes = () => {
  const privateRoutes = usePrivateRoutes();
  const publicRoutes = usePublicRoutes();

  return <AuthGuardian publicRoutes={publicRoutes} privateRoutes={privateRoutes} />;
};
