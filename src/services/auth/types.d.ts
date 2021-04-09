export type LoginActionResponseBody = LoginRequestSuccess & LoginRequestError;

type LoginRequestSuccess = {
  token: string;
  name: string;
  documentNumber: string;
  businessName: string;
};

type LoginRequestError = {
  error: string;
  error_description: string;
};
