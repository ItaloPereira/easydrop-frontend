import type { FunctionComponent, ReactElement } from 'react';
import { useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';
import { useDispatch, useSelector } from 'react-redux';

import { AuthActions, AuthSelectors } from 'store/reducers/auth';

type Props = {
  publicRoutes: ReactElement | null;
  privateRoutes: ReactElement | null;
};

const idleTimeout = 1000 * 60 * 30;

const AuthGuardian: FunctionComponent<Props> = ({ publicRoutes, privateRoutes }) => {
  const isAuthenticated = useSelector(AuthSelectors.isAuthenticatedSelector);
  const isRehydrated = useSelector(AuthSelectors.isRehydratedSelector);
  const authData = useSelector(AuthSelectors.authDataSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubTimeout: NodeJS.Timeout | null = null;

    return () => {
      if (unsubTimeout) {
        clearTimeout(unsubTimeout);
      }
    };
  }, [authData, dispatch]);

  useIdleTimer({
    timeout: idleTimeout,
    onIdle: () => {
      dispatch(AuthActions.logout());
    },
  });

  if (!isRehydrated) {
    return null;
  }

  if (isAuthenticated) {
    return privateRoutes;
  }

  return publicRoutes;
};

export default AuthGuardian;
