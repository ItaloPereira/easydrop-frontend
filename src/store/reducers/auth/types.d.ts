import type { Loading } from 'helpers/enums';

export type AuthState = {
  loading: Loading;
  data?: AuthData;
  error?: string;
};

export type AuthData = {
  token: string;
  name: string;
};

export type LoginAction = {
  input: {
    email: string;
    password: string;
  };
  output: {
    data?: AuthData;
  };
};

export type RegisterAction = {
  input: {
    name: string;
    email: string;
    password: string;
    whatsapp: string;
  };
  output: {
    data?: AuthData;
  };
};
