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
import useSyncState from './hooks/useSyncState';
/**
 * utils
 */
import type {
  ElementChangeEvent,
  ElementClickEvent,
  ElementLabel,
  ElementRef,
} from './index.d';
import cloneDeep from './utils/cloneDeep';
import dlv from './utils/dlv';
import isFilterUselessKeyValue from './utils/filterUselessKeyValue';
import getQueryParams from './utils/getQueryParams';
import isBlanks from './utils/isBlanks';
import isBrowser from './utils/isBrowser';
import isEmailValid from './utils/isEmailValid';
import {
  isArray,
  isBoolean,
  isFunction,
  isMap,
  isNumber,
  isObject,
  isSet,
  isString,
  isUndef,
} from './utils/isTypings';
import shuffleArray from './utils/shuffleArray';

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
  useImmer,
  useSyncState,
  useDisplayDevError,
};
export {
  IteratorViews,
  Selection,
  cloneDeep,
  dlv,
  getQueryParams,
  isArray,
  isBlanks,
  isBoolean,
  isBrowser,
  isEmailValid,
  isFilterUselessKeyValue,
  isFunction,
  isMap,
  isNumber,
  isObject,
  isSet,
  isString,
  isUndef,
  shuffleArray,
  useDisplayDevError,
  useImmer,
  useSyncState,
};
export type { ElementChangeEvent, ElementClickEvent, ElementLabel, ElementRef };
export default Darwish;
