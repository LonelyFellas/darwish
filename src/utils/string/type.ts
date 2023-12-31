export type TwoStringJoin<
  A extends string,
  B extends string,
  C extends string,
> = `${A}${C}${B}`;
export type ArrayJoin<
  T,
  D extends string = '',
  P extends string = '',
> = T extends [infer F, ...infer R]
  ? R['length'] extends 0
    ? `${P}${F extends string | number ? F : string}`
    : ArrayJoin<R, D, `${P}${F extends string | number ? F : string}${D}`>
  : P;

export type SplitToArray<
  T extends string,
  D extends string,
> = T extends `${infer F}${D}${infer R}` ? [F, ...SplitToArray<R, D>] : [T];
export type CharAt<
  T extends string,
  I extends number,
  A extends any[] = [],
> = T extends `${infer F}${infer R}`
  ? A['length'] extends I
    ? F
    : CharAt<R, I, [...A, F]>
  : never;
export type Concat<T extends string[]> = ArrayJoin<T>;
export type Length<
  T extends string,
  A extends any[] = [],
> = T extends `${infer F}${infer R}`
  ? F extends string
    ? Length<R, [F, ...A]>
    : A['length']
  : A['length'];


// P extends S
//   ? true
//   : T extends `${infer F}${infer R}`
//   ? SingleCharIncludes<S, F> extends true
//     ? Includes<R, S, `${P}${F}`>
//     : Includes<R, S>
//   : false;
