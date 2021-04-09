import differenceInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import isToday from 'date-fns/isToday';

export const formatRelativeDate = (date: number) => {
  if (isToday(fromUnixTime(date))) {
    return 'Hoje';
  }
  if (differenceInDays(fromUnixTime(date), new Date()) === -1) {
    return 'Ontem';
  }
  return format(fromUnixTime(date), 'dd/MM/yyyy');
};

export const getToday = () => {
  return format(new Date(), 'dd/MM/yyyy');
};
