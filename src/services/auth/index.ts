import { client } from 'services/client';

import { loginMock } from './__mocks__';
import type { LoginActionResponseBody, LoginRequestSuccess } from './types';

const login = (email: string, password: string): Promise<LoginRequestSuccess> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loginMock.success);
    }, 1000);
  });
};

const register = (name: string, email: string, whatsapp: string, password: string): Promise<LoginRequestSuccess> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(loginMock.success);
    }, 1000);
  });
};

export const authRequests = {
  login: async (email: string, password: string) => {
    // const response = await client.post<LoginActionResponseBody>('login', {
    //   data: {
    //     login: username,
    //     password,
    //   },
    // });
    const response = await login(email, password);
    return { authData: response };
  },
  register: async (name: string, email: string, whatsapp: string, password: string) => {
    const response = await register(name, email, whatsapp, password);
    return { authData: response };
  },
};
