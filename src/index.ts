import IteratorViews from './components/IteratorViews';
import Selection from './components/Selection';

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
};
export default Darwish;
