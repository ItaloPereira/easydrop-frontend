declare module '@portal-types/pages/whatsapp' {
  export type WppBilletResponse = WppBilletRequestSuccess & WppBilletRequestError;

  export type WppBilletRequestSuccess = {
    data: RequestSuccessData[];
  };

  type RequestSuccessData = {
    id: string;
    product_image: string;
    is_sent: boolean;
    message: string;
    order: Order;
    client: Client;
  };

  type Order = {
    number: string;
    date: string;
    price: string;
    status: string;
    order_link: string;
    billet_link: string;
    expiration_date: string;
  };

  type Client = {
    name: string;
    email: string;
    phone: string;
  };

  export type WppBilletRequestError = {
    error: string;
    error_description: string;
  };

  export type WppServices = 'billet' | 'cart';
}
