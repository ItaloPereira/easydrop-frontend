import { apiAddress, whitelabel } from 'config';

export class HTTPError<T> extends Error {
  response: HttpResponse<T>;

  statusNumber: number;

  constructor(message: string, response: HttpResponse<T>) {
    super(message);
    this.response = response;
    this.statusNumber = response.status;
  }
}

type FetchConfig = RequestInit & {
  data?: {
    [key: string]: any;
  };
  token?: string | undefined;
  useWhitelabel?: boolean | undefined;
};

export type HttpResponse<T> = Response & {
  parsedBody?: T;
};

export async function client<T = any>(
  endpoint: string,
  { data, token, useWhitelabel, headers: customHeaders, ...customConfig }: FetchConfig = {},
): Promise<HttpResponse<T>> {
  const newHeaders: Record<string, string> = {};

  if (token) {
    newHeaders.Authorization = `Bearer ${token}`;
  }

  if (data) {
    newHeaders['Content-Type'] = 'application/json';
  }

  if (useWhitelabel && whitelabel) {
    newHeaders.whitelabel = whitelabel;
  }

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    body: data ? JSON.stringify(data) : undefined,
    headers: {
      ...newHeaders,
      ...customHeaders,
    },
    ...customConfig,
  };

  const response: HttpResponse<T> = await fetch(`${apiAddress}/${endpoint}`, config);

  try {
    response.parsedBody = await response.json();
    // eslint-disable-next-line no-empty
  } catch (err) {}

  if (!response.ok) {
    throw new HTTPError<T>('Erro na requisição', response);
  }

  return response;
}

client.get = function get<T = any>(endpoint: string, config: FetchConfig) {
  return client<T>(endpoint, { ...config, method: 'GET' });
};

client.post = function post<T = any>(endpoint: string, config: FetchConfig) {
  return client<T>(endpoint, { ...config, method: 'POST' });
};
