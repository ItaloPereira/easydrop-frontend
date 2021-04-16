import { client } from 'services/client';

import { loginMock } from './__mocks__';
import type { LoginActionResponseBody } from './types';

export const authRequests = {
  login: async (username: string, password: string) => {
    const response = await client.post<LoginActionResponseBody>('login', {
      data: {
        login: username,
        password,
      },
    });
    return { authData: loginMock.success };
  },
  // register: async (name: string, email: string,)
};
