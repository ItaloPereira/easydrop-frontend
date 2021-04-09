import userEvent from '@testing-library/user-event';

import { render, screen } from 'helpers/testing';

import AuthFormsLogin from '.';

const login = jest.fn();
const help = jest.fn();
const forgotPassword = jest.fn();

const setup = async (
  props: React.ComponentProps<typeof AuthFormsLogin> = {
    onLogin: login,
    onForgotPassword: forgotPassword,
    onHelp: help,
    isLoading: false,
  },
) => {
  const utils = await render(
    <AuthFormsLogin
      onLogin={props.onLogin}
      onHelp={props.onHelp}
      onForgotPassword={props.onForgotPassword}
      errorMsg={props.errorMsg}
      isLoading={props.isLoading}
    />,
  );
  const components = {
    loginField: screen.getByRole('textbox', { name: /campo de login/i }),
    passwordField: screen.getByLabelText(/senha/i),
    rememberUsername: screen.getByLabelText(/Lembrar usuário/i),
    loginBtn: screen.getByText(/entrar/i),
    forgotBtn: screen.getByText(/esqueci minha senha/i),
  };
  return {
    components,
    ...utils,
  };
};

describe('AuthFormsLogin', () => {
  beforeEach(() => {
    login.mockReset();
    forgotPassword.mockReset();
    help.mockReset();
  });
  it('should login input be focused', async () => {
    const { components } = await setup();

    expect(components.loginField).toHaveFocus();
  });

  it('should password input be focused', async () => {
    const { components } = await setup();
    userEvent.tab();
    expect(components.passwordField).toHaveFocus();
  });

  it('should not show toggle password visibility button', async () => {
    await setup();
    expect(
      screen.queryByRole('button', {
        name: /alternância da visibilidade do campo de senha/i,
      }),
    ).not.toBeInTheDocument();
  });

  it('should show password', async () => {
    const {
      components: { passwordField },
    } = await setup();

    expect(passwordField.getAttribute('type')).toBe('password');
    userEvent.type(passwordField, 'senha');
    userEvent.click(
      screen.getByRole('button', {
        name: /alternância da visibilidade do campo de senha/i,
      }),
    );
    expect(passwordField.getAttribute('type')).toBe('text');
  });

  it('should not show password', async () => {
    const utils = await setup();

    userEvent.type(utils.components.passwordField, 'senha');

    const togglePasswordVisibilityBtn = screen.getByRole('button', {
      name: /alternância da visibilidade do campo de senha/i,
    });

    expect(utils.components.passwordField.getAttribute('type')).toBe('password');
    userEvent.click(togglePasswordVisibilityBtn);
    expect(utils.components.passwordField.getAttribute('type')).toBe('text');
    userEvent.click(togglePasswordVisibilityBtn);
    expect(utils.components.passwordField.getAttribute('type')).toBe('password');
  });

  it('should handle inputs change', async () => {
    const utils = await setup();

    expect(utils.components.passwordField).toBeInTheDocument();

    userEvent.type(utils.components.passwordField, '123456');

    expect(utils.components.passwordField).toHaveValue('123456');
  });

  it('should show the error message', async () => {
    const utils = await setup({
      onLogin: login,
      onForgotPassword: forgotPassword,
      onHelp: help,
      errorMsg: 'error',
      isLoading: false,
    });

    expect(utils.queryByTestId('box-error-alert')).toBeInTheDocument();
  });

  it('should call the login function', async () => {
    const {
      components: { loginField, passwordField, loginBtn },
    } = await setup();
    userEvent.type(loginField, 'lorem');
    userEvent.type(passwordField, '123456');

    userEvent.click(loginBtn);

    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith({ username: 'lorem', password: '123456', rememberUsername: false });
  });

  it('should call the login function with rememberUsername', async () => {
    const {
      components: { loginField, passwordField, loginBtn, rememberUsername },
    } = await setup();
    userEvent.type(loginField, 'lorem');
    userEvent.type(passwordField, '123456');
    userEvent.click(rememberUsername);

    userEvent.click(loginBtn);

    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith({ username: 'lorem', password: '123456', rememberUsername: true });
  });

  it('should call the forgot password function', async () => {
    const { components } = await setup();

    userEvent.click(components.forgotBtn);

    expect(forgotPassword).toHaveBeenCalledTimes(1);
  });
});
