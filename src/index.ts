/**
 * Components
 */
import HighlightedText from './components/HighlightedText';
import If from './components/If';
import IteratorViews from './components/IteratorViews';
import Selection from './components/Selection';
import Switch from './components/Switch';

/**
 * hooks
 */
import useBoolean from './hooks/useBoolean';
import useCookie from './hooks/useCookie';
import useDisplayDevError from './hooks/useDisplayDevError';
import useHover from './hooks/useHover';
import useImmer from './hooks/useImmer';
import useImmerReducer from './hooks/useImmerReducer';
import useKey from './hooks/useKey';
import useList from './hooks/useList';
import useRouteState from './hooks/useRouteState';
import useSet from './hooks/useSet';
import useSetState from './hooks/useSetState';
import useSyncState from './hooks/useSyncState';
import useTextSelection from './hooks/useTextSelection';
import useToggle from './hooks/useToggle';
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
} from './index.d';
import cloneDeep from './utils/cloneDeep';
import deepEqual from './utils/deepEqual';
import dlv from './utils/dlv';
import isFilterUselessKeyValue from './utils/filterUselessKeyValue';
import getQueryParams from './utils/getQueryParams';
import isBlanks from './utils/isBlanks';
import isBrowser from './utils/isBrowser';
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
import shuffleArray from './utils/shuffleArray';
import typeOfData from './utils/typeOfData';
const Darwish = {
  IteratorViews,
  Selection,
  If,
  HighlightedText,
  Switch,
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
};
export {
  HighlightedText,
  If,
  IteratorViews,
  List,
  Selection,
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
  shuffleArray,
  typeOfData,
  useBoolean,
  useCookie,
  useDisplayDevError,
  useHover,
  useImmer,
  useImmerReducer,
  useKey,
  useList,
  useRouteState,
  useSet,
  useSetState,
  useSyncState,
  useTextSelection,
  useToggle,
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
