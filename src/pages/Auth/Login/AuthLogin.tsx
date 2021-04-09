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

  const onLogin = ({
    username,
    password,
    rememberUsername,
  }: {
    username: string;
    password: string;
    rememberUsername: boolean;
  }) => {
    dispatch(AuthActions.login({ username, password, rememberUsername }));
  };

  const onForgotPassword = () => navigate('/auth/forgot-password');
  const onHelp = () => navigate('/auth/faq');

  return (
    <AuthFormsLogin
      isLoading={authLoading}
      errorMsg={authError}
      onLogin={onLogin}
      onForgotPassword={onForgotPassword}
      onHelp={onHelp}
      rememberedUserName={window?.localStorage?.getItem('remember-username')}
    />
  );
};

export default AuthLogin;
