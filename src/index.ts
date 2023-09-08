/**
 * Components
 */
import IteratorViews from './components/IteratorViews';
import Selection from './components/Selection';

/**
 * hooks
 */
import useDisplayDevError from './hooks/useDisplayDevError';
import useImmer from './hooks/useImmer';
import useKey from './hooks/useKey';
import useList from './hooks/useList';
import useSyncState from './hooks/useSyncState';
import useTextSelection from './hooks/useTextSelection';
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
  isSet,
  isString,
  isUndef,
  dlv,
  typeOfData,
  deepEqual,
  List,
  useImmer,
  useSyncState,
  useDisplayDevError,
  useList,
  useUpdate,
  useUpdateEffect,
  useKey,
  useTextSelection,
};
export {
  IteratorViews,
  List,
  Selection,
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
  isSet,
  isString,
  isSymbol,
  isUndef,
  shuffleArray,
  typeOfData,
  useDisplayDevError,
  useImmer,
  useKey,
  useList,
  useSyncState,
  useTextSelection,
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
