export type LoginActionResponseBody = LoginRequestSuccess & LoginRequestError;

export type LoginRequestSuccess = {
  token: string;
  name: string;
};

type LoginRequestError = {
  error: string;
  error_description: string;
};
