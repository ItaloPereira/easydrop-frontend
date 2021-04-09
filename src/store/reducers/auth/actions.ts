import type { ThunkApi } from '@portal-types/store';

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { authRequests } from 'services/auth';
import { HTTPError } from 'services/client';

import type { LoginAction } from './types';

export const clearError = createAction('auth/clear-error');

export const logout = createAction('auth/logout');
export const login = createAsyncThunk<LoginAction['output'], LoginAction['input'], ThunkApi>(
  'auth/login',
  async ({ username, password, rememberUsername }, thunkApi) => {
    try {
      const loginResponse = await authRequests.login(username, password);
      return {
        data: loginResponse!.authData,
        rememberInfo: rememberUsername
          ? {
              username,
            }
          : undefined,
      };
    } catch (error) {
      if (error instanceof HTTPError && error.statusNumber === 500) {
        return thunkApi.rejectWithValue({ message: error.message, networkError: true });
      }

      return thunkApi.rejectWithValue({ message: error.message });
    }
  },
);
export const refresh = createAction('auth/refresh');
