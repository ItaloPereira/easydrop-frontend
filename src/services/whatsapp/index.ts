import { whatsappBilletMock } from './__mocks__';
import type { WppBilletResponseBody } from './types';

const wppbillet = (): Promise<WppBilletResponseBody> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(whatsappBilletMock.error);
    }, 500);
  });
};

export const getBilletData = async () => {
  const response = await wppbillet();

  return response;
};
