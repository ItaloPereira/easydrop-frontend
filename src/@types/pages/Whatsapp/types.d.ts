declare module '@portal-types/pages/whatsapp' {
  export type WppBilletResponse = WppBilletRequestSuccess & WppBilletRequestError;

  export type WppBilletRequestSuccess = {};

  export type WppBilletRequestError = {
    error: string;
    error_description: string;
  };

  export type WppServices = 'billet' | 'cart';
}
