# toNumber

## Example

```ts
import Darwish, { toNumber } from 'darwish';
export default function usingToNumber() {
  // When arg_0 is a numeric string, and no default value
  const numeric = '123456';
  const convertedVal1 = toNumber(numeric);
  const convertedVal2 = Darwish.toNumber(numeric);
  console.log(convertedVal1); // output is 123456
  console.log(convertedVal2); // output is 123456

  // When arg_0 is number is alphanumeric, and no default value
  const alphanumeric = '1234A';
  const convertedVal3 = toNumber(alphanumeric);
  console.log(convertedVal3); // output is 1234

  // When arg_0 is a string of letters, and no default value
  const letters = 'AAABBB';
  const convertedVal4 = toNumber(letters);
  console.log(convertedVal4); // output is NaN

  // When arg_0 is a empty string, and no default value
  const emptyStr = '';
  const convertedVal5 = toNumber(emptyStr);
  console.log(convertedVal5); // output is NaN

  // When arg_0 a string of letters, and it have a default value
  const str = 'AAABBB';
  const convertedVal6 = toNumber(str, 0);
  console.log(convertedVal6); // output is 0

  // When arg_0 is a `object` type
  const obj = {
    name: 'darwish'
    age: 18
  }
  const set = new Set([])
  const convertedVal7 = toNumber(obj);
  const convertedVal8 = toNumber(set, 10);
  console.log(converted7) // output is NaN
  console.log(converted8) // output is 10
}
```

## Source

```ts
import { isNumber, isString } from 'darwish';

/**
 * @author Darwish <289582304@qq.com>
 * @test Tested (已加入测试放心使用)
 * @description Return a 'number' type data.
 * If it can't to converted, return a default value.
 * Be care! The second param of function is a default value.
 * If the default value is not provided.
 * When conversion is not possible, it is NaN value.
 * But you already provided the the second value to a default value.
 * I sure the value you have set.
 *
 * 返回一个'number'类型的数据,如果不能转换，返回默认值。这个函数的第二个参数是一个默认值，
 * 如果默认值你没有传入的话，那么它在不能转化的情况下，它是一个NAN，
 * 如果你设置第二个参数为默认值，自然而然就为你设置的默认值。
 * @param value dataSource (被Changed的数据源)
 * @param defaultValue When conversion is not possible, it is NaN value.
 *  But you can provided any value you want. (默认值 NAN,可以设置默认为 0)
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
```
