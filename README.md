# darwish

[![NPM version](https://img.shields.io/npm/v/darwish.svg?style=flat)](https://npmjs.org/package/darwish)
[![NPM downloads](http://img.shields.io/npm/dm/darwish.svg?style=flat)](https://npmjs.org/package/darwish)

A react library developed with dumi

## Usage

一些前端的视图组件，React自定义钩子，和功能函数的库

### Hooks

```js
import { useImmer } from 'darwish';
export default () => {
  const [person, setPerson] = useImmer({
    name: 'darwish',
    d: {
      b: {
        info: {
          age: 25,
        },
      },
    },
  });
  return (
    <div>
      <button
        onClick={() => {
          setPerson((draft) => {
            draft.d.b.info.age++;
          });
        }}
      >
        change info
      </button>
      <h1>Age: {person.d.b.info.age}</h1>
    </div>
  );
};
```

### Utils

```js
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
```

### Types of Typescript

```ts
/**
 * @description 两个参数默认流程判断
 * */
type Switch<B, A = null> = A extends null ? B : A;
/**
 * @description
 * 实现范型函数
 *
 * !! 值得注意第二个参数是函数的返回值，如果入参为空，则第一个参数一定指定为null
 * @example
 * const a: GenericsFn = () => {} // () => void;
 * const a1: GenericsFn<null, number> = () => number; // () => number;
 * const b: GenericsFn<{ index: number }> = (arg) => {
 *     console.log(arg.index);
 * }; // (arg: {index: number}) => void
 * const c: GenericsFn<[number, string, boolean]> = (age, number, isOld) => {
 *     console.log(age);
 *     console.log(number);
 *     console.log(isOld);
 * }; // (...args: [number, string, boolean]) = void
 * */
type GenericsFunc<
  P extends any[] | AnyObj | null = null,
  R = null,
> = P extends null
  ? () => Switch<void, R>
  : P extends any[]
  ? (...args: P) => Switch<void, R>
  : (arg: P) => Switch<void, R>;
```

## Options

不再推荐使用`UI`组件部分，UI组件部分会在之后的版本废除
正在编写 `utils` 的文档

## LICENSE

MIT

# darwish
