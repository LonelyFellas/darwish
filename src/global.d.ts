/* eslint-disable @typescript-eslint/no-use-before-define */
export = Darwish;
export as namespace Darwish;
declare namespace Darwish {
  export type ElementLabel = keyof JSX.IntrinsicElements;
  export type ElementRef<T extends ElementLabel> =
    JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
      React.HTMLAttributes<unknown>,
      infer A
    >
      ? A
      : never;
  export type ElementClickEvent<T extends ElementLabel> = React.MouseEvent<
    ElementRef<T>,
    MouseEvent
  >;
  export type ElementChangeEvent<T extends ElementLabel> = React.ChangeEvent<
    ElementRef<T>
  >;
  export type ElementHTMLProps<T extends ElementLabel> =
    JSX.IntrinsicElements[T];
  export type EmptyObject = Record<PropertyKey, never>;
  export type TList = CList;
  export type AnyType =
    | 'null'
    | 'undefined'
    | 'string'
    | 'boolean'
    | 'object'
    | 'array'
    | 'symbol'
    | 'date'
    | 'function'
    | 'regexp'
    | 'set'
    | 'map';
}
export class ExtendObject extends Object {
  static pick: <T extends Record<PropertyKey, any>>(
    dataSource: T,
    pickKeys: (keyof T)[],
  ) => Partial<T>;
  static omit: <T extends Record<PropertyKey, any>>(
    dataSource: T,
    omitKeys: (keyof T)[],
  ) => Partial<T>;
}
/**
 * Components
 */
/**
 * hooks
 */
/**
 * utils
 */
import cloneDeep from './utils/cloneDeep';
import isFilterUselessKeyValue from './utils/filterUselessKV';

// eslint-disable-next-line @typescript-eslint/no-redeclare
declare const Darwish: {
  ElementLabel: Darwish.ElementLabel;
  ElementRef: Darwish.ElementRef<Darwish.ElementLabel>;
  ElementClickEvent: Darwish.ElementClickEvent<Darwish.ElementLabel>;
  ElementChangeEvent: Darwish.ElementChangeEvent<Darwish.ElementLabel>;
  EmptyObject: Darwish.EmptyObject;
  AnyType: Darwish.AnyType;
  // IteratorViews: {
  //   (props: {
  //     items: any[] | number;
  //     children?:
  //       | JSX.Element
  //       | ((item: any, index: number) => JSX.Element)
  //       | null;
  //   }): JSX.Element;
  //   ({ props: IteratorViewsProps }): JSX.Element;
  // };
  // If: FC<
  //   PropsWithChildren<{
  //     condition: boolean;
  //     render?: (() => JSX.Element) | undefined;
  //   }>
  // >;
  // Switch: {
  //   (props: PropsWithChildren<{ strict?: boolean }>): JSX.Element;
  //   (props: PropsWithChildren<SwitchProps>): JSX.Element;
  // };
  // HighlightedText: FC<PropsWithChildren<HighlightedTextProps>>;

  // Selection: typeof Selection;
  cloneDeep: typeof cloneDeep;
  getQueryParams: (URL: string) => string;
  isBlanks: <T>(data: T) => boolean;
  isBrowser: boolean;
  isEmailValid: (address: string) => boolean;
  isFilterUselessKeyValue: typeof isFilterUselessKeyValue;
  shuffleArray: <T_1>(arr: T_1[]) => T_1[];
  uniqueObjectOfArray: <T extends Record<PropertyKey, any>>(
    dataArray: T[],
    uniqueId?: keyof T,
  ) => T[];
  uniqueObjectOfArrayMap: <T extends Record<PropertyKey, any>>(
    dataArray: T[],
    uniqueId?: keyof T,
  ) => T[];
  isArray: (value: unknown) => value is any[];
  isDate: (value: unknown) => value is Date;
  isBoolean: (value: unknown) => value is boolean;
  isFunction: (value: unknown) => value is (...arg: any) => any;
  isMap: (value: unknown) => value is Map<any, any>;
  isNumber: (value: unknown) => value is number;
  isObject: (value: unknown) => value is Record<any, any>;
  isSet: (value: unknown) => value is Set<any>;
  isString: (value: unknown) => value is string;
  isUndef: (value: unknown) => value is undefined;
  isDev: boolean;
  dlv: <T_4 extends unknown>(
    obj: T_4,
    key?: string,
    def?: unknown,
    p?: number,
    undef?: unknown,
  ) => unknown;
  /**
   * @description Check out any type for any data (检查任何数据的任何类型)
   * @param data dataSource(数据源)
   * @returns return a union type ('null' | 'undefined' | 'string' | 'boolean' | 'object' | 'array' | 'symbol' | 'date' | 'function' | 'regexp' | 'set' | 'map')
   */
  typeOfData: (value: unknown) => Darwish.AnyType;
  deepEqual: <T>(lfs: T, rfs: T) => boolean;
  objAssign: <T, U, K extends keyof T & keyof U>(a: T, b: U, keys: K[]) => void;
  objCuter: <T, U extends keyof T>(recordObj: T, keyArr: U[]) => Pick<T, U>;
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
  toNumber: (value: unknown, defaultValue?: number) => number;
  chunkArray: <T_5>(arr: T_5[], size: number) => T_5[][];
  useImmer: <S = any>(initialValue: S | (() => S)) => ImmerHook<S>;
  useImmerReducer: {
    <S, A, I>(
      reducer: ImmerReducer<S, A>,
      initializerArg: S & I,
      initializer: (arg: S & I) => S,
    ): [S, Dispatch<A>];
    <S, A, I>(
      reducer: ImmerReducer<S, A>,
      initializerArg: I,
      initializer: (arg: I) => S,
    ): [S, Dispatch<A>];
    <S, A>(
      reducer: ImmerReducer<S, A>,
      initialState: S,
      initializer?: undefined,
    ): [S, Dispatch<A>];
  };
  useSyncState: <T_2 extends object>(initialValue: T_2) => any;
  useDisplayDevError: <T_3>(
    errorText?: T_3 | undefined,
  ) => (err?: T_3 | undefined) => void;
  useUpdate: () => React.DispatchWithoutAction;
  useUpdateEffect: (
    effect: React.EffectCallback,
    deps?: React.DependencyList | undefined,
  ) => void;
  useKey: (code: string, callback: () => void) => void;
  useList: <T>(initialList: T[]) => [T[], IUseListUtil<T>];
  useTextSelection: () => { text: string };
  useBoolean: (defaultValue: boolean) => [boolean, BooleanFn];
  useToggle: {
    <T = boolean>(): [boolean, ToggleActions<T>];
    <T>(): [T, ToggleActions<T>];
    <T, U>(defaultValue: T, reverseValue: U): [T | U, ToggleActions<T | U>];
  };
  useCookie: (
    cookieName: string,
  ) => readonly [
    string | null,
    (
      value: string,
      option?: import('js-cookie').CookieAttributes | undefined,
    ) => void,
    (option?: import('js-cookie').CookieAttributes | undefined) => void,
  ];
  useHover: (
    hoveredView: JSX.Element,
  ) => readonly [React.FunctionComponentElement<any>, boolean];
  useSet: <T_6>(initialValue: T_6[] | Set<T_6>) => readonly [
    Set<T_6>,
    {
      add: (addValue: T_6) => void;
      remove: (removeValue: T_6) => void;
      toggle: (toggleValue: T_6) => void;
      reset: () => void;
      has: (hasValue: T_6) => boolean;
    },
  ];
  useSetState: <T_7 extends Record<any, any> | (() => Record<any, any>)>(
    initialValue: T_7,
  ) => readonly [
    T_7,
    (updateValue: Partial<T_7> | ((args: T_7) => Partial<T_7>)) => void,
  ];
  useRouteState: <T_8>(
    key: string,
    type: T_8,
  ) => readonly [T_8, (value: T_8) => void];
  useRouteStates: <T_9 extends Record<any, any>>(
    obj: T_9,
  ) => readonly [T_9, (value: Partial<T_9>) => void];
  useSessionStorage: (
    key: string,
  ) => readonly [any, (value: unknown) => void, () => void];
  useLocalStorage: (
    key: string,
  ) => readonly [any, (value: unknown) => void, () => void];
  useQrCode: (
    url: string,
  ) => (props: Darwish.ElementHTMLProps<'canvas'>) => JSX.Element;
  usePrevious: <T>(state: T) => T | undefined;
  useLatest: <T>(value: T) => React.MutableRefObject<T>;
  useMount: (fn: () => void) => void;
  useUnmount: (fn: () => void) => void;
  useEventListener: {
    <K extends keyof HTMLElementEventMap, U extends unknown>(
      name: React.RefObject<U>,
      event: K,
      callback: (this: U, ev: HTMLElementEventMap[K]) => any,
      options?: boolean | AddEventListenerOptions,
    ): void;
    <K extends keyof WindowEventMap>(
      name: Window,
      event: K,
      callback: (this: Window, ev: WindowEventMap[K]) => any,
      option?: boolean | AddEventListenerOptions,
    ): void;
  };
  usePress: (
    pressedView: JSX.Element | (() => JSX.Element),
    callback: () => void,
  ) => () => React.FunctionComponentElement<any>;
  useUpdateEffectOnce: (
    effect: React.EffectCallback,
    condition?: boolean,
  ) => void;
  useEffectOnce: (effect: React.EffectCallback) => void;
};
/**
 * 全局
 */
declare global {
  interface IUseListUtil<T> {
    set: (value: IHookState<T[]>) => void;
    push: (value: T) => void;
    updateAt: (index: number, value: T) => void;
    insertAt: (index: number, insertValue: T) => void;
    update: (predicate: (a: T, b: T) => boolean, updateValue: T) => void;
    updateFirst: (predicate: (a: T, b: T) => boolean, updateValue: T) => void;
    upsert: (predicate: (a: T, b: T) => boolean, updateValue: T) => void;
    filter: (
      callbackFn: (value: T, index?: number, array?: T[]) => boolean,
      thisArg?: any,
    ) => void;
    removeAt: (index: number) => void;
    clear: () => void;
    reset: () => void;
  }

  type IHookState<T extends Array<unknown>> = T | ((args: T) => T);
  type BooleanFn = (
    settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  interface ToggleActions<T> {
    toggle: () => void;
    set: (settingValue: T) => void;
    setLeft: () => void;
    setRight: () => void;
  }
  type DraftFunction<S> = (draft: import('immer').Draft<S>) => void;
  type Updater<S> = (arg: S | DraftFunction<S>) => void;
  type ImmerHook<S> = [S, Updater<S>];
  type ImmerReducer<S, A> = (
    draftState: Draft<S>,
    action: A,
  ) => void | (S extends undefined ? typeof nothing : S);
  type Reducer<S = any, A = any> = ImmerReducer<S, A>;
  interface IteratorViewsProps
    extends Omit<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
      'children'
    > {
    items: any[] | number;
    children?: JSX.Element | ((item: any, index: number) => JSX.Element) | null;
    label?: Darwish.ElementLabel;
  }
  interface SwitchProps
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    strict?: boolean;
    label?: keyof JSX.IntrinsicElements;
  }
  interface HighlightedTextProps {
    text?: string;
    keywords?: string;
    color?: string;
  }
  type ExtendObject = typeof ExtendObject;
}

export declare module '*.css';
export declare module '*.module.css';
export default Darwish;
