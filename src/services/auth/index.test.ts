import { authRequests } from '.';
import { loginMock } from './__mocks__';

describe('Auth service', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('should handle the login request parsing with success return', async () => {
    fetchMock.once(JSON.stringify(loginMock.success));

    const { authData } = await authRequests.login('jaya.desev', '123@mudar');

    expect(authData).toStrictEqual({
      token: '4c8cf2accad5f0450b4dc4b05cb68de6',
      name: 'Jaya',
      documentNumber: '12.1234/0001-23',
      businessName: 'NTK Online',
    });
  });

  test('should handle the forgotPassword request parsing with success return', async () => {
    fetchMock.once(JSON.stringify({ message: 'OK' }));

    const response = await authRequests.forgotPassword('teste@gmail.com');
    expect(response).toBe(true);
  });

  test('should handle the forgotPassword request parsing with failure return', async () => {
    fetchMock.mockRejectOnce();

    const response = await authRequests.forgotPassword('teste@gmail.com');
    expect(response).toBe(false);
  });
});
