import { isNumber, isString } from './is';

/**
 * @author Darwish <289582304@qq.com>
 * @test Tested (已加入测试放心使用)
 * @description Return a 'number' type data.
 * If it can't to converted, return a default value.
 * Be care! The second param of function is a default value.
 * If the default value is not provided.
 * When conversion is not possible, it is NaN value.
 * But you already provided the second value to a default value.
 * I sure the value you have set.
 *
 * 返回一个'number'类型的数据,如果不能转换，返回默认值。这个函数的第二个参数是一个默认值，
 * 如果默认值你没有传入的话，那么它在不能转化的情况下，它是一个NAN，
 * 如果你设置第二个参数为默认值，自然而然就为你设置的默认值。
 * @param value dataSource (被Changed的数据源)
 * @param defaultValue When conversion is not possible, it is NaN value.
 *  But you can provide any value you want. (默认值 NAN,可以设置默认为 0)
 * @returns Finally you get a 'number' data. (返回一个'number'类型的数据)
 */
const toNumber = (value: unknown, defaultValue: number = NaN) => {
  let ans = defaultValue;
  if (isNumber(value) && !Number.isNaN(value)) {
    ans = value;
  } else if (isString(value) && !Number.isNaN(parseFloat(value))) {
    ans = parseFloat(value);
  }
  return ans;
};

export default toNumber;
