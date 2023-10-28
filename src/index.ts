/**
 * Components
 */
import HighlightedText from './components/HighlightedText';
import If from './components/If';
import IteratorViews from './components/IteratorViews';
import Selection from './components/Selection';
import Switch from './components/Switch';
import Splitter from './components/Splitter';
/**
 * hooks
 */
import useBoolean from './hooks/useBoolean';
import useCookie from './hooks/useCookie';
import useDisplayDevError from './hooks/useDisplayDevError';
import useEventListener from './hooks/useEventListener';
import useHover from './hooks/useHover';
import useImmer from './hooks/useImmer';
import useImmerReducer from './hooks/useImmerReducer';
import useKey from './hooks/useKey';
import useLatest from './hooks/useLatest';
import useList from './hooks/useList';
import useMount from './hooks/useMount';
import usePrevious from './hooks/usePrevious';
import useQrCode from './hooks/useQrCode';
import { useRouteState, useRouteStates } from './hooks/useRouteState';
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
import usePress from './hooks/usePress';
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
import cloneDeep from './utils/cloneDeep';
import deepEqual from './utils/deepEqual';
import dlv from './utils/dlv';
import isFilterUselessKeyValue from './utils/filterUselessKeyValue';
import getQueryParams from './utils/getQueryParams';
import isBlanks from './utils/isBlanks';
import isBrowser from './utils/isBrowser';
import isDev from './utils/isDev';
import isEmailValid from './utils/isEmailValid';
import {
  isArray,
  isBigint,
  isBoolean,
  isDate,
  isFunction,
  isMap,
  isNull,
  isNumber,
  isObject,
  isPromise,
  isSet,
  isString,
  isSymbol,
  isUndef,
} from './utils/isTypings';
import List from './utils/list';
import { objAssign, objCuter } from './utils/objOperation';
import shuffleArray from './utils/shuffleArray';
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
  isDev,
  objAssign,
  objCuter,
  dlv,
  typeOfData,
  deepEqual,
  List,
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
  usePress
};
export {
  HighlightedText,
  If,
  IteratorViews,
  List,
  Selection,
  Switch,
  Splitter,
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
  isSet,
  isString,
  isSymbol,
  isUndef,
  objAssign,
  objCuter,
  shuffleArray,
  typeOfData,
  useBoolean,
  useCookie,
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
  usePrevious,
  useQrCode,
  useRouteState,
  useRouteStates,
  useSessionStorage,
  useSet,
  useSetState,
  useSyncState,
  useTextSelection,
  useToggle,
  useUnmount,
  useUpdate,
  useUpdateEffect,
  usePress
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
