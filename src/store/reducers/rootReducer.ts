import { combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth';

const rootReducer = combineReducers({
  auth: persistReducer({ key: 'auth', storage, whitelist: ['data'], keyPrefix: 'portal-revenda:' }, authReducer),
});

export default rootReducer;
