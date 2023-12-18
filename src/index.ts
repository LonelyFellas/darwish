/* eslint-disable @typescript-eslint/no-namespace */
import './types/global';
/**
 * hooks
 */
import useBoolean from './hooks/useBoolean';
import useCookie from './hooks/useCookie';
import useDefault from './hooks/useDefault';
import useDisplayDevError from './hooks/useDisplayDevError';
import useEffectOnce from './hooks/useEffectOnce';
import useEventListener from './hooks/useEventListener';
import useHover from './hooks/useHover';
import useImmer from './hooks/useImmer';
import useImmerReducer from './hooks/useImmerReducer';
import useKey from './hooks/useKey';
import useLatest from './hooks/useLatest';
import useList from './hooks/useList';
import useLocalStorage from './hooks/useLocalStorage';
import useMount from './hooks/useMount';
import usePress from './hooks/usePress';
import usePrevious from './hooks/usePrevious';
import useQrCode from './hooks/useQrCode';
import { useRouteState, useRouteStates } from './hooks/useRouteState';
import useScroll from './hooks/useScroll';
import useSessionStorage from './hooks/useSessionStorage';
import useSet from './hooks/useSet';
import useSetState from './hooks/useSetState';
import useSyncState from './hooks/useSyncState';
import useTextSelection from './hooks/useTextSelection';
import useToggle from './hooks/useToggle';
import useUnmount from './hooks/useUnmount';
import useUpdate from './hooks/useUpdate';
import useUpdateEffect from './hooks/useUpdateEffect';
import useUpdateEffectOnce from './hooks/useUpdateEffectOnce';

/**
 * utils
 */
import {
  chunkArray,
  shuffleArray,
  uniqueObjectOfArray,
  uniqueObjectOfArrayToMap,
} from './utils/array';
import cloneDeep from './utils/cloneDeep';
import deepEqual from './utils/deepEqual';
import dlv from './utils/dlv';
import isFilterUselessKeyValue from './utils/filterUselessKV';
import getQueryParams from './utils/getQueryParams';
import {
  isArray,
  isBigint,
  isBlanks,
  isBoolean,
  isBrowser,
  isDate,
  isDev,
  isEmailValid,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPromise,
  isReactFragment,
  isSet,
  isString,
  isSymbol,
  isUndef,
} from './utils/is';
import ExtendObject from './utils/obj';
import { objAssign, objCuter } from './utils/objOperation';
import toNumber from './utils/toNumber';
import typeOfData from './utils/typeOfData';
const Darwish = {
  cloneDeep,
  getQueryParams,
  isBlanks,
  isBrowser,
  isEmailValid,
  isFilterUselessKeyValue,
  shuffleArray,
  uniqueObjectOfArray,
  uniqueObjectOfArrayToMap,
  isDate,
  isNull,
  isSymbol,
  isBigint,
  isArray,
  isBoolean,
  isFunction,
  isMap,
  isNumber,
  isObject,
  isPromise,
  isSet,
  isString,
  isUndef,
  isReactFragment,
  isDev,
  objAssign,
  objCuter,
  dlv,
  chunkArray,
  typeOfData,
  deepEqual,
  toNumber,
  useImmer,
  useImmerReducer,
  useSyncState,
  useDisplayDevError,
  useList,
  useUpdate,
  useUpdateEffect,
  useKey,
  useTextSelection,
  useBoolean,
  useToggle,
  useCookie,
  useHover,
  useSet,
  useSetState,
  useRouteState,
  useRouteStates,
  useSessionStorage,
  useLocalStorage,
  useQrCode,
  usePrevious,
  useLatest,
  useMount,
  useUnmount,
  useEventListener,
  usePress,
  useDefault,
  useScroll,
};
export {
  ExtendObject,
  chunkArray,
  cloneDeep,
  deepEqual,
  dlv,
  getQueryParams,
  isArray,
  isBigint,
  isBlanks,
  isBoolean,
  isBrowser,
  isDate,
  isDev,
  isEmailValid,
  isFilterUselessKeyValue,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPromise,
  isReactFragment,
  isSet,
  isString,
  isSymbol,
  isUndef,
  objAssign,
  objCuter,
  shuffleArray,
  toNumber,
  typeOfData,
  uniqueObjectOfArray,
  uniqueObjectOfArrayToMap,
  useBoolean,
  useCookie,
  useDefault,
  useDisplayDevError,
  useEffectOnce,
  useEventListener,
  useHover,
  useImmer,
  useImmerReducer,
  useKey,
  useLatest,
  useList,
  useLocalStorage,
  useMount,
  usePress,
  usePrevious,
  useQrCode,
  useRouteState,
  useRouteStates,
  useScroll,
  useSessionStorage,
  useSet,
  useSetState,
  useSyncState,
  useTextSelection,
  useToggle,
  useUnmount,
  useUpdate,
  useUpdateEffect,
  useUpdateEffectOnce,
};

export default Darwish;
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
}
