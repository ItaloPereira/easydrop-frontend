import type { ComponentProps } from 'react';

import userEvent from '@testing-library/user-event';

import { fireEvent, render } from 'helpers/testing';

import AuthFormsForgot from '.';

const submitHandler = jest.fn();
const onBackHandler = jest.fn();
const onHelpHandler = jest.fn();

const defaultProps = {
  onSubmit: submitHandler,
  errorMsg: undefined,
  isLoading: false,
  onHelp: onHelpHandler,
  onBack: onBackHandler,
};

const setup = async (props: ComponentProps<typeof AuthFormsForgot> = defaultProps) => {
  const utils = render(
    <AuthFormsForgot
      onSubmit={props.onSubmit}
      errorMsg={props.errorMsg}
      isLoading={props.isLoading}
      onBack={props.onBack}
      onHelp={props.onHelp}
    />,
  );

  const components = {
    emailField: utils.getByRole('textbox'),
    submitFormButton: utils.getByRole('button', { name: /botao para enviar email/i }),
    backButton: utils.getByText('Voltar para o login'),
  };

  return {
    components,
    ...utils,
  };
};

describe('Forgot Password', () => {
  beforeEach(() => {
    submitHandler.mockReset();
    onBackHandler.mockReset();
    onHelpHandler.mockReset();
  });

  it('should render the password recover components', async () => {
    const utils = await setup();
    expect(utils.components.emailField).toBeInTheDocument();
    expect(utils.components.submitFormButton).toBeInTheDocument();
  });

  it('should call the back function', async () => {
    const utils = await setup();
    expect(utils.components.backButton).toBeInTheDocument();
    fireEvent.click(utils.components.backButton);
    expect(onBackHandler).toHaveBeenCalledTimes(1);
  });

  it('should call the submit function', async () => {
    const utils = await setup();
    const input = utils.components.emailField;
    userEvent.type(input, 'email@valido.com');
    const button = utils.components.submitFormButton;
    userEvent.click(button);

    expect(submitHandler).toHaveBeenCalledTimes(1);
    expect(submitHandler).toHaveBeenCalledWith('email@valido.com');
  });
});
