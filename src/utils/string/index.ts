import { isArray, isString } from '../is';

export type TwoStringJoin<
  A extends string,
  B extends string,
  C extends string,
> = `${A}${C}${B}`;
export type ArrayJoin<T, D extends string, P extends string = ''> = T extends [
  infer F,
  ...infer R,
]
  ? R['length'] extends 0
    ? `${P}${F extends string | number ? F : string}`
    : ArrayJoin<R, D, `${P}${F extends string | number ? F : string}${D}`>
  : P;
/**
 * @description Extend String class
 * @extend-property
 * @example
 * ⚽️: `join`
 * ⚽️: `split`
 *
 */
export default class ExtendString extends String {
  /**
   * @description Strongly typed join two string with separator
   * @param lfs left param
   * @param rfs right param
   * @param separator separator
   * @returns left param + separator + right param
   * @example
   * const fullName = ExtendString.join("Darwish", 'Yu', ' ');
   * console.log(fullName); // Darwish Yu
   */
  static join<L extends string, R extends string, S extends string>(
    lfs: L,
    rfs: R,
    separator: S,
  ): TwoStringJoin<L, R, S>;
  /**
   * @description Strongly typed join two string with separator
   * @param dataSource data source
   * @param separator separator
   * @returns data source join with separator
   * @example
   * const fullName = ExtendString.join(['Darwish', 'Yu'], ' ');
   * console.log(fullName); // Darwish Yu
   */
  static join<const D extends (string | number)[], S extends string>(
    dataSource: D,
    separator: S,
  ): ArrayJoin<D, S>;
  static join(data: any, dataOrSep: any, separator?: any): any {
    if (isString(data) && isString(dataOrSep) && isString(separator)) {
      return data + separator + dataOrSep;
    }
    if (isArray(data) && isString(dataOrSep)) {
      return data.join(dataOrSep);
    }
    return data.toString();
  }
}
