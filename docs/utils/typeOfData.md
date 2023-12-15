# typeOfData

Check out any type for any data

## Example

```ts
import { typeOfData } from 'darwish';

export default function usingTypeOfData() {
  // output is lowercase string

  // check `null` type of data
  const nullStr = typeOfData(null);
  console.log(nullStr); // `null`

  // check `undefined` type of data
  const undefStr = typeOfData(undefined);
  console.log(undefStr); // `undefined`

  // check `string` type of data
  const str = typeOfData('i am a string');
  console.log(str); // `string`

  // check `boolean` type of data
  const boolStr = typeOfData(true);
  console.log(boolStr);

  // check `object` type of data
  const objStr = typeOfData({ name: 'darwish' });
  console.log(objStr); // 'object'

  // check `array` type of data
  const arrStr = typeOfData(['darwish', 19]);
  console.log(arrStr); // `array`

  // check 'symbol` type of data
  const symbolStr = typeOfData(Symbol('darwish'));
  console.log(symbolStr); // `symbol`

  // check `date` type of data
  const dateStr = typeOfData(new Date());
  console.log(dateStr); // `date`

  // check `function` type of data
  const funcStr = typeOfData(() => `darwish`);
  console.log(funcStr); // `function`

  // check `regexp` type of data
  const regStr = typeOfData(new RegExp(/^d/));
  console.log(regStr); // `regexp`

  // check `set` type of data
  const setData = typeOfData(new Set(['darwish']));
  console.log(setData); // `set`

  // check `map` type of data
  const mapData = typeOfData(new Map());
  console.log(mapData); // `map`
}
```

## Source

```ts
/**
 * @description Check out any type for any data (检查任何数据的任何类型)
 * @param data dataSource(数据源)
 * @returns return a union type ('null' | 'undefined' | 'string' | 'boolean' | 'object' | 'array' | 'symbol' | 'date' | 'function' | 'regexp' | 'set' | 'map')
 */
export default function typeOfData(data: unknown): Darwish.AnyType {
  try {
    return Object.prototype.toString
      .call(data)
      .slice(8, -1)
      .toLowerCase() as Darwish.AnyType;
  } catch (error) {
    return 'null';
  }
}
```
