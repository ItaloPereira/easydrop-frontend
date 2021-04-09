export const isValidEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export function isEmpty(data: any) {
  return (
    data === undefined ||
    data === null ||
    (typeof data === 'string' && data.trim().length === 0) ||
    (typeof data === 'object' && Object.keys(data).length === 0)
  );
}
