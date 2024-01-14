// import { isArray, isString } from '../is';
// import type {
//   ArrayJoin,
//   CharAt,
//   Concat,
//   EndsWith,
//   Includes,
//   Length,
//   Repeat,
//   Slice,
//   SplitToArray,
//   StartsWith,
//   TwoStringJoin,
// } from './type';

// /**
//  * @description Extend String class
//  * @extend-property
//  * @example
//  * ⚽️: `join`
//  * ⚽️: `split`
//  *
//  */
// export default class ExtendString extends String {
//   /**
//    * @description Strongly typed join two string with separator
//    * @param lfs left param
//    * @param rfs right param
//    * @param separator separator
//    * @returns left param + separator + right param
//    * @example
//    * const fullName = ExtendString.join("Darwish", 'Yu', ' ');
//    * console.log(fullName); // Darwish Yu
//    */
//   static superJoin<L extends string, R extends string, S extends string>(
//     lfs: L,
//     rfs: R,
//     separator: S,
//   ): TwoStringJoin<L, R, S>;
//   /**
//    * @description Strongly typed join two string with separator
//    * @param dataSource data source
//    * @param separator separator
//    * @returns data source join with separator
//    * @example
//    * const fullName = ExtendString.join(['Darwish', 'Yu'], ' ');
//    * console.log(fullName); // Darwish Yu
//    */
//   static superJoin<const D extends (string | number)[], S extends string>(
//     dataSource: D,
//     separator: S,
//   ): ArrayJoin<D, S>;
//   static superJoin(data: any, dataOrSep: any, separator?: any): any {
//     if (isString(data) && isString(dataOrSep) && isString(separator)) {
//       return data + separator + dataOrSep;
//     }
//     if (isArray(data) && isString(dataOrSep)) {
//       return data.join(dataOrSep);
//     }
//     return data.toString();
//   }

//   static superSplit<const T extends string, const S extends string>(
//     str: T,
//     separator: S,
//   ) {
//     return str.split(separator) as SplitToArray<T, S>;
//   }

//   static superChatAt<const T extends string, I extends number>(
//     str: T,
//     index: I,
//   ) {
//     return str.charAt(index) as CharAt<T, I>;
//   }

//   static superConcat<const T extends string[]>(...rest: T) {
//     return String.prototype.concat(...rest) as Concat<T>;
//   }

//   static superEndsWith<const T extends string, const S extends string>(
//     str: T,
//     searchStr: S,
//     length?: number,
//   ) {
//     return str.endsWith(searchStr, length) as EndsWith<T, S>;
//   }

//   static superStartsWith<const T extends string, const S extends string>(
//     str: T,
//     searchStr: S,
//     position?: number,
//   ) {
//     return str.startsWith(searchStr, position) as StartsWith<T, S>;
//   }

//   static superIncludes<const T extends string, const S extends string>(
//     str: T,
//     searchStr: S,
//     position?: number,
//   ) {
//     return str.includes(searchStr, position) as Includes<T, S>;
//   }

//   static superLength<const T extends string>(str: T) {
//     return str.length as Length<T>;
//   }

//   static superRepeat<const T extends string, const C extends number>(
//     str: T,
//     count: C,
//   ) {
//     return str.repeat(count) as Repeat<T, C>;
//   }
//   static superSlice<
//     const T extends string,
//     const S extends number | undefined = undefined,
//     const E extends number | undefined = undefined,
//   >(str: T, start?: S, end?: E) {
//     return str.slice(start, end) as Slice<T, S, E>;
//   }
//   static superPadEnd<
//     const T extends string,
//     const M extends number,
//     const F extends string,
//   >(str: T, maxLength: M, fillString: F) {
//     return str.padEnd(maxLength, fillString) as PadEnd<T, M, F>;
//   }
// }

// const a = ExtendString.superPadEnd('HelloWorld', 15, '*');

// // type PadEnd<T, M, F, Temp extends any[] = []> = T extends `${infer F1}${infer R}` ? Temp
