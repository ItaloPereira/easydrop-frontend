import { useRef, useState } from 'react';

import { FetchConfig, HTTPError, HttpResponse, client } from 'services/client';

type MakeRequestGetParams = {
  query?: string;
  config?: FetchConfig;
  requestOnce?: boolean;
};

function useFetchGet<ResponseType extends any>(originalUrl: string) {
  const controllerRef = useRef<AbortController | null>();

  const [pending, setPending] = useState(false);
  const [response, setResponse] = useState<HttpResponse<ResponseType>['parsedBody']>();

  const makeRequest = async ({ query, config, requestOnce }: MakeRequestGetParams) => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
    setPending(true);
    try {
      const data = await client.get<ResponseType>(`${originalUrl}${query ?? ''}`, {
        ...config,
        signal: controllerRef.current.signal,
      });
      if (!requestOnce) {
        setResponse(data.parsedBody);
      }
      controllerRef.current = null;
      setPending(false);
      return data;
    } catch (err) {
      if (err.name !== 'AbortError') {
        setPending(false);
      }
      if (err instanceof HTTPError) {
        return { error: err.message, networkError: err.statusNumber === 400 || err.isServerError };
      }
      throw err;
    }
  };

  return { response, makeRequest, pending };
}

// TODO: implementar a logica de post
const useFetchPost = (url: string, config: FetchConfig) => {};

export { useFetchGet };
