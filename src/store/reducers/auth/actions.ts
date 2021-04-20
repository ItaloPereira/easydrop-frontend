import type { ThunkApi } from '@portal-types/store';

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { authRequests } from 'services/auth';
import { HTTPError } from 'services/client';

import type { LoginAction, RegisterAction } from './types';

export const clearError = createAction('auth/clear-error');

export const logout = createAction('auth/logout');

export const register = createAsyncThunk<RegisterAction['output'], RegisterAction['input'], ThunkApi>(
  'auth/register',
  async ({ name, email, whatsapp, password }, thunkApi) => {
    try {
      const registerResponse = await authRequests.register(name, email, whatsapp, password);
      return {
        data: registerResponse!.authData,
      };
    } catch (error) {
      if (error instanceof HTTPError && error.statusNumber === 500) {
        return thunkApi.rejectWithValue({ message: error.message, networkError: true });
      }

      return thunkApi.rejectWithValue({ message: error.message });
    }
  },
);

export const login = createAsyncThunk<LoginAction['output'], LoginAction['input'], ThunkApi>(
  'auth/login',
  async ({ email, password }, thunkApi) => {
    try {
      const loginResponse = await authRequests.login(email, password);
      return {
        data: loginResponse!.authData,
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
