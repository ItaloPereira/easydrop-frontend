import { integrationsMock } from './__mocks__';
import type { IntegrationsRequestSuccess } from './types';

const integrations = (): Promise<IntegrationsRequestSuccess> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(integrationsMock.success);
    }, 1500);
  });
};

export const getIntegrations = async () => {
  const response = await integrations();

  return response;
};
