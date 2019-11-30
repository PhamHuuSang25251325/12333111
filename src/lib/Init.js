import numeral from 'numeral';

numeral.register('locale', 'vn', {
  delimiters: {
    thousands: ' ',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  currency: {
    symbol: 'VNĐ',
  },
});

numeral.locale('vn');
