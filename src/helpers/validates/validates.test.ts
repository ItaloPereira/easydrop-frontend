import * as mocks from './__mocks__';
import helpersValidates from './index';

test.each(mocks.isValidEmail)('should validate email %s', (email, validation) => {
  const result = helpersValidates.isValidEmail(email);
  expect(result).toBe(validation);
});

test.each(mocks.isEmpty)('should validate empty values %s', (data, validation) => {
  const result = helpersValidates.isEmpty(data);
  expect(result).toBe(validation);
});
