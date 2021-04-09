import * as mocks from './__mocks__';
import helpersFormatters from './index';

test.each(mocks.cpfData)('should format cpf %s to %s', (unformattedDocument, formattedDocument) => {
  const result = helpersFormatters.formatCpf(unformattedDocument);
  expect(result).toBe(formattedDocument);
});
test.each(mocks.cnpjData)('should format cnpj %s to %s', (unformattedDocument, formattedDocument) => {
  const result = helpersFormatters.formatCnpj(unformattedDocument);
  expect(result).toBe(formattedDocument);
});
test.each(mocks.userNamesData)('should return the user initials from %s to %s', (userNames, initials) => {
  const result = helpersFormatters.userInitials(userNames);
  expect(result).toBe(initials);
});

test.each(mocks.userFirstNamesData)('should return the first name from %s to %s', (userNames, formattedUserName) => {
  const result = helpersFormatters.formatUserFirstName(userNames);
  expect(result).toBe(formattedUserName);
});

test.each(mocks.amountsInFull)(
  'should return the amount in full formatted from %d to %s',
  (unformattedAmount, formattedAmount) => {
    const result = helpersFormatters.formatAmountInFull(unformattedAmount);
    expect(result).toBe(formattedAmount);
  },
);
