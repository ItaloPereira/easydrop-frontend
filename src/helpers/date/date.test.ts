import getUnixTime from 'date-fns/getUnixTime';
import parse from 'date-fns/parse';
import sub from 'date-fns/sub';

import { formatRelativeDate } from './date';

describe('Test case of dates function', () => {
  test.each([
    [getUnixTime(new Date()), 'Hoje'],
    [getUnixTime(sub(new Date(), { days: 1 })), 'Ontem'],
    [getUnixTime(parse('24/02/2021', 'dd/MM/yyyy', new Date())), '24/02/2021'],
  ])('should format each new date into relative date', (newDate, dateString) => {
    const formatDate = formatRelativeDate(newDate);
    expect(formatDate).toBe(dateString);
  });
});
