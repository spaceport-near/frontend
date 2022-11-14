export const toPrecision = (number, precision, withCommas, atLeastOne) => {
  const [whole, decimal = ''] = number.split('.');

  let str = `${withCommas ? formatWithCommas(whole) : whole}.${decimal.slice(
    0,
    precision
  )}`.replace(/\.$/, '');
  if (atLeastOne && Number(str) === 0 && str.length > 1) {
    const n = str.lastIndexOf('0');
    str = str.slice(0, n) + str.slice(n).replace('0', '1');
  }

  return str;
};

export const formatWithCommas = (value) => {
  const pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(value)) {
    value = value.replace(pattern, '$1,$2');
  }
  return value;
};

export const toReadableNumber = (decimals, number) => {
  if (!decimals) return number;

  const wholeStr =
    number.substring(0, number.split('.')[0].length - decimals) || '0';

  const fractionStr = number
    .substring(number.split('.')[0].length - decimals)
    .padStart(decimals, '0')
    .substring(0, decimals);

  return `${wholeStr}.${fractionStr}`.replace(/\.?0+$/, '');
};
