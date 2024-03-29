/* eslint-disable @typescript-eslint/no-namespace */
import './types/darwish';
/**
 * hooks
 */
import useBoolean from './hooks/useBoolean';
import useCookie from './hooks/useCookie';
import useCreation from './hooks/useCreation';
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
import useRafState from './hooks/useRafState';
import useRequest from './hooks/useRequest/useRequest';
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
import ExtendArray, {
  chunkArray,
  shuffleArray,
  uniqueObjectOfArray,
  uniqueObjectOfArrayToMap,
} from './utils/array';
import cloneDeep from './utils/cloneDeep';
import deepEqual from './utils/deepEqual';
import dlv from './utils/dlv';
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
  ExtendObject,
  ExtendArray,
  cloneDeep,
  getQueryParams,
  isBlanks,
  isBrowser,
  isEmailValid,
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
  useRafState,
  useCreation,
  useRequest,
};
export {
  ExtendArray,
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
  useCreation,
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
  useRafState,
  useRequest,
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
