import { Loading } from 'helpers/enums';

import AuthReducer, { AuthActions } from '.';
import { AuthState } from './types';

describe('Auth reducer', () => {
  const initialState: AuthState = {
    loading: Loading.IDLE,
  };

  const authPayload = {
    token: 'token de acesso',
    name: 'Jaya',
    documentNumber: '12.1234/0001-23',
    businessName: 'NTK Online',
  };

  it('should handle the login pending action', () => {
    const pendingAction = { type: AuthActions.login.pending.type };

    expect(AuthReducer(initialState, pendingAction)).toEqual({ loading: 'pending' });
  });

  it('should handle the login fulfilled action', () => {
    const fulfilledAction = {
      type: AuthActions.login.fulfilled.type,
      payload: {
        data: authPayload,
      },
    };

    expect(AuthReducer(initialState, fulfilledAction)).toEqual({
      loading: 'idle',
      data: authPayload,
    });
    expect(window.localStorage.getItem('remember-username')).toBe(null);
  });

  it('should handle the login fulfilled action with rememberUsername', () => {
    const fulfilledAction = {
      type: AuthActions.login.fulfilled.type,
      payload: {
        data: authPayload,
        rememberInfo: {
          username: 'userTeste',
        },
      },
    };

    expect(AuthReducer(initialState, fulfilledAction)).toEqual({
      loading: 'idle',
      data: authPayload,
    });

    expect(window.localStorage.getItem('remember-username')).toBe('userTeste');
  });

  it('should handle the login rejected action', () => {
    const rejectedInvalidTokenAction = {
      type: AuthActions.login.rejected.type,
      payload: 'invalid_token',
    };

    const rejectedDefaultAction = {
      type: AuthActions.login.rejected.type,
      payload: 'unknown',
    };

    expect(AuthReducer(initialState, rejectedInvalidTokenAction)).toEqual({
      loading: 'idle',
      error: 'Usuário ou senha incorretos, por favor verifique seus dados e tente novamente.',
    });
    expect(AuthReducer(initialState, rejectedDefaultAction)).toEqual({
      loading: 'idle',
      error: 'Usuário ou senha incorretos, por favor verifique seus dados e tente novamente.',
    });
  });

  it('should handle the logout action', () => {
    const logoutAction = { type: AuthActions.logout };
    const fulfilledState = {
      loading: Loading.IDLE,
      data: authPayload,
    };

    expect(AuthReducer(fulfilledState, logoutAction)).toEqual({ loading: 'idle' });
  });
});
