import type { Loading } from 'helpers/enums';

export type AuthState = {
  loading: Loading;
  data?: AuthData;
  error?: string;
};

export type AuthData = {
  token: string;
  name: string;
  documentNumber: string;
  businessName: string;
};

export type LoginAction = {
  input: {
    username: string;
    password: string;
    rememberUsername: boolean;
  };
  output: {
    data?: AuthData;
    rememberInfo?: {
      username: string;
    };
  };
};
