export type IntegrationsResponseBody = IntegrationsRequestSuccess & IntegrationsRequestError;

export type IntegrationsRequestSuccess = {
  shopify: boolean;
  yampi: boolean;
};

type IntegrationsRequestError = {
  error: string;
  error_description: string;
};
