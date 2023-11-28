import { isNumber, isString } from 'darwish';

/**
 * @description 返回一个'number'类型的数据,如果不能转换，返回默认值
 * @param value 被Changed的数据源
 * @param defaultValue 默认值 NAN,可以设置默认为 0
 * @returns 返回一个'number'类型的数据
 */
const toNumber = (value: any, defaultValue: number = NaN) => {
  let ans = defaultValue;
  if (isNumber(value) && !Number.isNaN(value)) {
    ans = value;
  } else if (isString(value) && !Number.isNaN(parseFloat(value))) {
    ans = parseFloat(value);
  }
  return ans;
};

export default toNumber;
