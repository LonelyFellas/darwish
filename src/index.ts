/**
 * Components
 */
import HighlightedText from './components/HighlightedText';
import If from './components/If';
import IteratorViews from './components/IteratorViews';
import Selection from './components/Selection';
import Splitter from './components/Splitter';
import Switch from './components/Switch';
/**
 * hooks
 */
import useBoolean from './hooks/useBoolean';
import useCookie from './hooks/useCookie';
import useDefault from './hooks/useDefault';
import useDisplayDevError from './hooks/useDisplayDevError';
import useEventListener from './hooks/useEventListener';
import useHover from './hooks/useHover';
import useImmer from './hooks/useImmer';
import useImmerReducer from './hooks/useImmerReducer';
import useKey from './hooks/useKey';
import useLatest from './hooks/useLatest';
import useList from './hooks/useList';
import useMount from './hooks/useMount';
import usePress from './hooks/usePress';
import usePrevious from './hooks/usePrevious';
import useQrCode from './hooks/useQrCode';
import { useRouteState, useRouteStates } from './hooks/useRouteState';
import useScroll from './hooks/useScroll';
import useSet from './hooks/useSet';
import useSetState from './hooks/useSetState';
import useLocalStorage from './hooks/useStorage/useLocalStorage';
import useSessionStorage from './hooks/useStorage/useSessionStorage';
import useSyncState from './hooks/useSyncState';
import useTextSelection from './hooks/useTextSelection';
import useToggle from './hooks/useToggle';
import useUnmount from './hooks/useUnMount';
import useUpdate from './hooks/useUpdate';
import useUpdateEffect from './hooks/useUpdateEffect';
/**
 * utils
 */
import type {
  AnyType,
  ElementChangeEvent,
  ElementClickEvent,
  ElementLabel,
  ElementRef,
  TList,
} from './global';
import {
  shuffleArray,
  uniqueObjectOfArray,
  uniqueObjectOfArrayToMap,
} from './utils/array';
import cloneDeep from './utils/cloneDeep';
import deepEqual from './utils/deepEqual';
import dlv from './utils/dlv';
import isFilterUselessKeyValue from './utils/filterUselessKeyValue';
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
import { objAssign, objCuter } from './utils/objOperation';
import toNumber from './utils/toNumber';
import typeOfData from './utils/typeOfData';
const Darwish = {
  IteratorViews,
  Selection,
  If,
  HighlightedText,
  Switch,
  Splitter,
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
  HighlightedText,
  If,
  IteratorViews,
  Selection,
  Splitter,
  Switch,
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
};
export type {
  AnyType,
  ElementChangeEvent,
  ElementClickEvent,
  ElementLabel,
  ElementRef,
  TList,
};
export default Darwish;
