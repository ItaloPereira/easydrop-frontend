export type IntegrationsYampiResponseBody = IntegrationsYampiRequestSuccess & IntegrationsYampiRequestError;

export type IntegrationsYampiRequestSuccess = {
  alias: string;
  token: string;
  secretKey: string;
};

type IntegrationsYampiRequestError = {
  error: string;
  error_description: string;
};
