import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import AuthFormsForgot from 'components/Auth/Forms/Forgot';
import AuthFormsForgotSuccess from 'components/Auth/Forms/Forgot/Success';
import { authRequests } from 'services/auth';

import { RecoverStatus } from './enums';

const AuthForgotPassword: FunctionComponent = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState(RecoverStatus.IDLE);

  const sendEmail = async (emailValue: string) => {
    setStatus(RecoverStatus.PENDING);
    const successResponse = await authRequests.forgotPassword(emailValue);

    if (successResponse) {
      setStatus(RecoverStatus.SUCCESS);
    } else {
      setStatus(RecoverStatus.FAILED);
    }
  };

  const onBack = () => navigate('/auth/login');
  const onHelp = () => navigate('/auth/faq');

  if (status === RecoverStatus.SUCCESS) {
    return <AuthFormsForgotSuccess onBack={() => onBack()} />;
  }
  return (
    <AuthFormsForgot
      onSubmit={(email) => sendEmail(email)}
      onBack={onBack}
      onHelp={onHelp}
      errorMsg={status === RecoverStatus.FAILED ? 'Erro Interno. Tente novamente' : undefined}
      isLoading={status === RecoverStatus.PENDING}
    />
  );
};

export default AuthForgotPassword;
