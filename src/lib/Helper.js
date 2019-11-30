import numeral from 'numeral';
import moment from 'moment';

export const CurrencyFormat = value => {
  let result = numeral(value).format('0,0[.]00 $');
  return result;
};

export const DateFormat = value => {
  let result = moment(value).format('DD-MM-YYYY');
  return result;
};

export const DateTimeFormat = value => {
  let result = moment(value).format('DD-MM-YYYY HH:mm:ss');
  return result;
};
