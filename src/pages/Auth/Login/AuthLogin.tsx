import type { FunctionComponent } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import AuthFormsLogin from 'components/Auth/Forms/Login';
import { useAppDispatch } from 'hooks/redux';
import { AuthActions, AuthSelectors } from 'store/reducers/auth';

const AuthLogin: FunctionComponent = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authError = useSelector(AuthSelectors.authError);
  const authLoading = useSelector(AuthSelectors.isAuthLoadingSelector);

  useEffect(() => {
    return () => {
      dispatch(AuthActions.clearError());
    };
  }, [dispatch]);

  const onRegister = () => navigate('/auth/register');

  const onLogin = ({ email, password }: { email: string; password: string }) => {
    // dispatch(AuthActions.login({ username: name, password: email, rememberUsername: true }));
  };

  return <AuthFormsLogin loading={authLoading} formError={authError} onRegister={onRegister} onLogin={onLogin} />;
};

export default AuthLogin;
