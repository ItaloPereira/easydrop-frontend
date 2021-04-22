import { integrationsMock } from './__mocks__';
import type { IntegrationsYampiRequestSuccess } from './types';

const yampiIntegration = (): Promise<IntegrationsYampiRequestSuccess> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(integrationsMock.success);
    }, 500);
  });
};

export const getYampiIntegration = async () => {
  const response = await yampiIntegration();

  return response;
};

export const setYampiData = async (alias: string, token: string, secretKey: string) => {
  const response = await yampiIntegration();

  return response;
};
