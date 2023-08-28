/**
 * Components
 */
import IteratorViews from './components/IteratorViews';
import Selection from './components/Selection';

/**
 * hooks
 */
import useImmer from './hooks/useImmer';
import useSyncState from './hooks/useSyncState';
/**
 * utils
 */
import cloneDeep from './utils/cloneDeep';
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
  useImmer,
  useSyncState,
};
export {
  IteratorViews,
  Selection,
  cloneDeep,
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
  useImmer,
  useSyncState,
};
export default Darwish;
