import type { FunctionComponent } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import type { AppDispatch, RootState } from '@portal-types/store';

import { ThemeProvider } from '@material-ui/core';
import type { AnyAction } from '@reduxjs/toolkit';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { render as rtlRender, RenderOptions } from '@testing-library/react';

import mediaQuery from 'css-mediaquery';
import type { PartialLocation } from 'history';
import { createBrowserHistory } from 'history';
import rootReducer from 'store/reducers/rootReducer';
import { themeDefault } from 'themes';

/**
 * Return an object for match mediaQueries
 *
 * @param width - is a number of your breakpoint. Ex.: 960 (breakpoint md of Mui)
 *
 * @example
 * ```
 * // in your test code
 *  window.matchMedia = createMatchMedia(1024);
 * ```
 */
function createMatchMedia(width: number): (query: string) => MediaQueryList {
  // @ts-ignore
  return (query: string) => ({
    matches: mediaQuery.match(query, { width }),
    addListener: () => {},
    removeListener: () => {},
  });
}

export const defaultRouterLocation = {
  state: {},
  key: '',
  pathname: 'http://localhost',
  search: '',
  hash: '',
};

export type TestingLocation = PartialLocation<{ [x: string]: any }>;

/**
 * Return render component with all application providers
 *
 * @param ui - Component render
 * @param config - Config the custom render. Accepts redux actions and another route.
 * @returns The new render component
 *
 * @example
 * ```
 * // render simple component
 * const { container } = render(<SimpleComp />);
 * ```
 * // render component and dispatch redux actions
 * ```
 * const { container } = render(<ActionsComp />, {
 *    actions: [AuthActions.clearError()],
 * });
 * ```
 *
 * @beta
 */
const customRender = (
  ui: React.ReactElement,
  {
    actions = [],
    initialState,
    actionSniffer,
    routerLocation,
    ...opts
  }: Omit<RenderOptions, 'queries'> & {
    routerLocation?: TestingLocation;
    actions?: AnyAction[];
    initialState?: RootState;
    actionSniffer?: (action: AnyAction) => void;
  } = {},
) => {
  const actionSnifferMiddleware = () => (next: AppDispatch) => (action: AnyAction) => {
    if (actionSniffer) {
      actionSniffer(action);
    }
    return next(action);
  };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState ?? {},
    middleware: [...getDefaultMiddleware(), actionSnifferMiddleware],
  });

  actions.forEach((action) => store.dispatch(action));

  const history = createBrowserHistory();

  const location = { ...defaultRouterLocation, ...routerLocation };
  history.push({ pathname: location.pathname, search: location.search }, location.state);

  const AllProviders: FunctionComponent = ({ children }) => (
    <Provider store={store}>
      <ThemeProvider theme={themeDefault}>
        <Router navigator={history} location={history.location} action={history.action}>
          {children}
        </Router>
      </ThemeProvider>
    </Provider>
  );

  return {
    ...rtlRender(ui, {
      wrapper: AllProviders,
      ...opts,
    }),
    history,
  };
};

export * from '@testing-library/react';
export { customRender as render, createMatchMedia };
