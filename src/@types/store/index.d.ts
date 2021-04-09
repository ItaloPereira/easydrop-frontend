declare module '@portal-types/store' {
  import { store } from 'store';
  import rootReducer from 'store/reducers/rootReducer';

  export interface RootState extends ReturnType<typeof rootReducer> {}

  type RejectedValue = {
    networkError?: boolean;
    message: string;
  };

  export type AppDispatch = typeof store.dispatch;

  export type ThunkApi = {
    state: RootState;
    rejectValue: RejectedValue;
    requestId: string;
  };
}
