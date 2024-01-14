declare namespace Darwish {
  /**
   * 判断两个类型是否相等
   * @example
   * type A = Equal<1, 1> // true
   * type B = Equal<1, 2> // false
   * type C = Equal<{a: number}, {a: string}> // false
   * type D = Equal<{a: number}, {readonly a: number}> // false
   * type E = Equal<{a: number}, {a: number}> // true
   */
  type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
    ? 1
    : 2
    ? true
    : false;
  /**
   * @description 将一个类型变成增长数字的数组
   * @example Iteraor<number, 5> --> [1, 2, 3, 4, 5]
   */
  type Iteraor<N, Temp extends any[] = []> = Temp['length'] extends N
    ? Temp
    : Iteraor<N, [...Temp, Temp['length']]>;

  /**
   * @description 讲一个字符串类型的数字变成变成 number 类型
   */
  type ToNumber<T> = T extends number
    ? T
    : T extends `${infer S extends number}`
      ? S extends number
        ? S
        : S
      : never;
  /**
   * @description 将一个number类型变成字符串
   */
  type ToString<T> = T extends string ? T : T extends number ? `${T}` : never;


}
