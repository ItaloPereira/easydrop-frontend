import type { AnyAction } from '@reduxjs/toolkit';

import type { TestingLocation } from 'helpers/testing';
import { render } from 'helpers/testing';
import { AuthActions } from 'store/reducers/auth';

import AuthLogin from '.';

const setup = async ({ location, actions }: { location?: TestingLocation; actions?: AnyAction[] } = {}) => {
  const utils = render(<AuthLogin />, {
    routerLocation: location,
    actions,
  });

  const components = {
    cardTitle: utils.queryByRole('heading', { name: /Fazer login/i }),
    loader: utils.queryByRole('progressbar'),
  };

  return {
    components,
    ...utils,
  };
};

describe('AuthLogin page', () => {
  it('should render the page', async () => {
    const { components, history } = await setup({
      location: {
        pathname: '/auth/login',
      },
    });

    expect(history.location.pathname).toBe('/auth/login');
    expect(components.cardTitle).toBeInTheDocument();
  });

  it('should render the loading when login is submited', async () => {
    const { components, history } = await setup({
      location: {
        pathname: '/auth/login',
      },
      actions: [{ type: AuthActions.login.pending.type }],
    });

    expect(history.location.pathname).toBe('/auth/login');
    expect(components.loader).toBeInTheDocument();
  });
});
