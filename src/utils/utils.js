/**
 * 三位加个逗号
 * @param money string | number
 */
export const convert = money => {
  let s = money;
  s += '';
  // if (s.indexOf('.') === -1) s += '.0';
  // if (/\.\d$/.test(s)) s += '0';
  while (/\d{4}(\.|,)/.test(s)) s = s.replace(/(\d)(\d{3}(\.|,))/, '$1,$2');
  return s.toString().split('');
};
