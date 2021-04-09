import { createReducer } from '@reduxjs/toolkit';

import { Loading } from 'helpers/enums';

import { login, logout } from './actions';
import { AuthState } from './types';

export const authInitialState: AuthState = {
  loading: Loading.IDLE,
};

export default createReducer(authInitialState, (builder) =>
  builder
    .addCase(login.pending, (state) => {
      state.loading = Loading.PENDING;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.loading = Loading.IDLE;
      state.data = action.payload.data;
      if (action.payload.rememberInfo && window.localStorage) {
        window.localStorage.setItem('remember-username', action.payload.rememberInfo.username);
      } else if (!action.payload.rememberInfo && window.localStorage) {
        window.localStorage.removeItem('remember-username');
      }
      state.error = undefined;
    })
    .addCase(login.rejected, (state) => {
      state.loading = Loading.IDLE;
      state.error = 'Usuário ou senha incorretos, por favor verifique seus dados e tente novamente.';
    })
    .addCase(logout, (state) => {
      delete state.data;
    }),
);
