/* eslint-disable @typescript-eslint/no-namespace */
export {};
declare global {
  namespace Darwish {
    type AnyObj = Record<PropertyKey, any>;
    type EmptyObj = Record<PropertyKey, never>;

    type ElementLabel = keyof JSX.IntrinsicElements;
    type ElementRef<T extends ElementLabel> =
      JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
        React.HTMLAttributes<unknown>,
        infer A
      >
        ? A
        : never;
    type ElementClickEvent<T extends ElementLabel> = React.MouseEvent<
      ElementRef<T>,
      MouseEvent
    >;
    type ElementChangeEvent<T extends ElementLabel> = React.ChangeEvent<
      ElementRef<T>
    >;
    type ElementHTMLProps<T extends ElementLabel> = JSX.IntrinsicElements[T];
    /** utils  */
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
    type TupleToObject<T extends readonly PropertyKey[]> = {
      [P in T[number]]: P;
    };
    type TupleToUnion<T extends any[]> = T extends [infer First, ...infer Rest]
      ? TupleToUnion<Rest> | First
      : never;
    type DeepReadonly<T> = {
      readonly [P in keyof T]: T[P] extends GenericsFunc
        ? T[P]
        : T[P] extends AnyObj
        ? DeepReadonly<T[P]>
        : T[P];
    };
    type Includes<T extends readonly any[], U> = T extends [
      infer Item,
      ...infer B,
    ]
      ? Equal<Item, U> extends true
        ? true
        : Includes<B, U>
      : false;

    type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
      T,
    >() => T extends Y ? 1 : 2
      ? true
      : false;
    export type If<C extends boolean, T, F> = C extends true ? T : F;
    type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
      ...T,
      ...U,
    ];
    /**
     * @description 将一个类型 循环 n 次 组成一个数组
     *  ! 作用用数据表，可限制数组长度
     *  @example RecArray<number, 5> --> [number, number, number, number, number]
     *
     */
    type RecArray<
      T,
      N extends number,
      A extends any[] = [],
    > = A['length'] extends N ? A : RecArray<T, N, [T, ...A]>;

    /**
     * @description 实现Optional类型
     * @example
     * interface Info {
     *    name: string;
     *    age: number;
     *    hobby: string;
     *    isMale: boolean;
     * }
     *  // ⬇️
     *  // ⬇️
     * type InfoOptional = Optional<Info, 'name' | 'hobby'>
     *  // type InfoOptional = {
     *  //  name?: string;
     *  //  age: number;
     *  //  hobby?: string;
     *  //  isMale: boolean;
     *  // }
     */
    type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

    /**
     * @description 对第一个参数做处理：只有第二参数是必选属性，其余都是可选属性
     * @example
     * interface Info {
     *  age: number;
     *  name: string;
     *  hobby: string;
     *  grade: string;
     *  isMale: false;
     * }
     * type InfoRequired = RequiredBy<Info, 'name' | 'hobby'>
     * // type InfoRequired = {
     * //  age?: number;
     * //  name: string;
     * //  hobby: string;
     * //  grade?: string;
     * //  isMale?: false;
     * // }
     */
    type RequiredBy<T, K extends keyof T> = Partial<Omit<T, K>> &
      Required<Pick<T, K>>;
  }
}
declare module 'darwish' {
  type AnyObj = Darwish.AnyObj;
  type EmptyObj = Darwish.EmptyObj;

  type ElementLabel = Darwish.ElementLabel;
  type ElementRef<T extends ElementLabel> = Darwish.ElementRef<T>;
  type ElementClickEvent<T extends ElementLabel> = Darwish.ElementClickEvent<T>;
  type ElementChangeEvent<T extends ElementLabel> =
    Darwish.ElementChangeEvent<T>;
  type ElementHTMLProps<T extends ElementLabel> = Darwish.ElementHTMLProps<T>;
  type Switch<B, A = null> = Darwish.Switch<B, A>;
  type GenericsFunc<
    P extends any[] | AnyObj | null = null,
    R = null,
  > = Darwish.GenericsFunc<P, R>;
  type TupleToObject<T extends readonly PropertyKey[]> =
    Darwish.TupleToObject<T>;
  type TupleToUnion<T extends any[]> = Darwish.TupleToUnion<T>;
  type DeepReadonly<T> = Darwish.DeepReadonly<T>;
  type Includes<T extends readonly any[], U> = Darwish.Includes<T, U>;
  type Equal<X, Y> = Darwish.Equal<X, Y>;
  type If<C extends boolean, T, F> = Darwish.If<C, T, F>;
  type Concat<
    T extends readonly unknown[],
    U extends readonly unknown[],
  > = Darwish.Concat<T, U>;
  type RecArray<T, N extends number, A extends any[] = []> = Darwish.RecArray<
    T,
    N,
    A
  >;
  type Optional<T, K extends keyof T> = Darwish.Optional<T, K>;
}
