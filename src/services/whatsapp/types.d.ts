export type WppBilletResponseBody = WppBilletRequestSuccess & WppBilletRequestError;

export type WppBilletRequestSuccess = {};

export type WppBilletRequestError = {
  error: string;
  error_description: string;
};
