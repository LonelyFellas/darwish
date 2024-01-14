// export type TwoStringJoin<
//   A extends string,
//   B extends string,
//   C extends string,
// > = `${A}${C}${B}`;
// export type ArrayJoin<
//   T,
//   D extends string = '',
//   P extends string = '',
// > = T extends [infer F, ...infer R]
//   ? R['length'] extends 0
//     ? `${P}${F extends string | number ? F : string}`
//     : ArrayJoin<R, D, `${P}${F extends string | number ? F : string}${D}`>
//   : P;
// export type SplitToArray<
//   T extends string,
//   D extends string,
// > = T extends `${infer F}${D}${infer R}` ? [F, ...SplitToArray<R, D>] : [T];
// export type CharAt<
//   T extends string,
//   I extends number,
//   A extends any[] = [],
// > = T extends `${infer F}${infer R}`
//   ? A['length'] extends I
//     ? F
//     : CharAt<R, I, [...A, F]>
//   : never;
// export type Concat<T extends string[]> = ArrayJoin<T>;
// export type Length<
//   T extends string,
//   A extends any[] = [],
// > = T extends `${infer F}${infer R}`
//   ? F extends string
//     ? Length<R, [F, ...A]>
//     : A['length']
//   : A['length'];
// export type EndsWith<
//   T extends string,
//   S extends string,
// > = T extends `${infer F}${S}` ? true : false;
// export type StartsWith<
//   T extends string,
//   S extends string,
// > = T extends `${S}${infer L}` ? true : false;
// export type Includes<
//   T extends string,
//   S extends string,
//   Temp extends string = '',
// > = StartsWith<T, S> extends true
//   ? true
//   : T extends `${infer F}${infer R}`
//     ? Temp extends S
//       ? true
//       : Includes<R, S, F>
//     : false;
// export type Repeat<
//   T extends string,
//   C extends number,
//   Temp extends any[] = [],
//   TempStr extends string = '',
// > = Temp['length'] extends C
//   ? TempStr
//   : Repeat<T, C, [...Temp, T], `${TempStr}${T}`>;
// export type Slice<
//   T extends string,
//   S extends number | undefined = undefined,
//   E extends number | undefined = undefined,
//   Temp1 extends any[] = [],
//   Temp2 extends any[] = [],
//   Temp3 extends string = '',
// > = S extends undefined
//   ? T
//   : T extends `${infer F}${infer R}`
//     ? Temp1['length'] extends S
//       ? Temp2['length'] extends E
//         ? Temp3
//         : Slice<R, S, E, Temp1, [...Temp2, F], `${Temp3}${F}`>
//       : Slice<R, S, E, [...Temp1, F], Temp2, Temp3>
//     : Temp3;
