import type { FunctionComponent } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import AuthFormsRegister from 'components/Auth/Forms/Register';
import { useAppDispatch } from 'hooks/redux';
import { AuthActions, AuthSelectors } from 'store/reducers/auth';

export type RegisterData = {
  name: string;
  email: string;
  whatsapp: string;
  password: string;
};

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

  const onRegister = (registerData: RegisterData) => {
    dispatch(AuthActions.register(registerData));
  };

  const onLogin = () => navigate('/auth/login');

  return <AuthFormsRegister loading={authLoading} formError={authError} onRegister={onRegister} onLogin={onLogin} />;
};

export default AuthLogin;
