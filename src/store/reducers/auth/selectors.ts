import { RootState } from '@portal-types/store';

import { createSelector } from '@reduxjs/toolkit';

import { Loading } from 'helpers/enums';

const authSelector = (state: RootState) => state.auth;

export const authDataSelector = createSelector(authSelector, (auth) => auth.data);
export const isAuthenticatedSelector = createSelector(authDataSelector, (data) => !!data?.token);
export const isAuthLoadingSelector = createSelector(authSelector, (auth) => auth.loading === Loading.PENDING);
export const authError = createSelector(authSelector, (auth) => auth.error);
