export declare class CList {
  dataSource: Array<unknown>;
  remove: {
    (option: { index: number }): void;
    (option: { target: unknown }): void;
    (option: { primaryKeyOfValue: { primaryKey: string; value: any } }): void;
    (option: {
      index?: number;
      target?: unknown;
      primaryKeyOfValue?: { primaryKey: string; value: any };
    }): void;
  };
  sort: () => void;
  add: (value: unknown) => void;
}
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
    | 'regExp'
    | 'set';
}
/**
 * Components
 */
import IteratorViews from './components/IteratorViews';
import Selection from './components/Selection';
/**
 * hooks
 */
/**
 * utils
 */
import cloneDeep from './utils/cloneDeep';
import isFilterUselessKeyValue from './utils/filterUselessKeyValue';

declare const Darwish: {
  IteratorViews: typeof IteratorViews;
  Selection: typeof Selection;
  cloneDeep: typeof cloneDeep;
  getQueryParams: (URL: string) => string;
  isBlanks: <T>(data: T) => boolean;
  isBrowser: () => boolean;
  isEmailValid: (address: string) => boolean;
  isFilterUselessKeyValue: typeof isFilterUselessKeyValue;
  shuffleArray: <T_1>(arr: T_1[]) => T_1[];
  isArray: (value: unknown) => value is any[];
  isBoolean: (value: unknown) => value is boolean;
  isFunction: (value: unknown) => value is Function;
  isMap: (value: unknown) => value is Map<any, any>;
  isNumber: (value: unknown) => value is number;
  isObject: (value: unknown) => value is Record<any, any>;
  isSet: (value: unknown) => value is Set<any>;
  isString: (value: unknown) => value is string;
  isUndef: (value: unknown) => value is undefined;
  dlv: <T_4 extends unknown>(
    obj: T_4,
    key?: string,
    def?: unknown,
    p?: number,
    undef?: unknown,
  ) => unknown;
  typeOfData: (value: unknown) => Darwish.AnyType;
  deepEqual: <T>(lfs: T, rfs: T) => boolean;
  List: Darwish.TList;
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
  useList: () => <T_5>(
    initialList: Array<T_5>,
  ) => [Array<T_5>, IUseListUtil<T_5>];
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
  useRouteState: () => {
    pushUrlParam: (key: string, value: any) => void;
    getUrlParam: (key: string) => any;
  };
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
    sort: (callbackFn: (a: T, b: T) => number) => void;
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
  type DraftFunction<S> = (draft: Draft<S>) => void;
  type Updater<S> = (arg: S | DraftFunction<S>) => void;
  type ImmerHook<S> = [S, Updater<S>];
  type ImmerReducer<S, A> = (
    draftState: Draft<S>,
    action: A,
  ) => void | (S extends undefined ? typeof nothing : S);
  type Reducer<S = any, A = any> = ImmerReducer<S, A>;
}

export default Darwish;
