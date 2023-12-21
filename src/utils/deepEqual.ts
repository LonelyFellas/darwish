/* eslint-disable @typescript-eslint/no-use-before-define */
import { isArray, isDate, isMap, isNull, isNumber, isSet } from './is';
import typeOfData from './typeOfData';
export function deepEqualByArray<T extends any[]>(
  lfs: T[],
  rfs: T[],
  isSort: boolean = false,
) {
  if (lfs.length !== rfs.length) {
    return false;
  }

  if (isSort) {
    lfs.sort();
    rfs.sort();
  }

  for (let i = 0; i < lfs.length; i++) {
    if (!deepEqual(lfs[i], rfs[i])) {
      return false;
    }
  }
  return true;
}
export function deepEqualByObject<T extends Record<any, any>>(lfs: T, rfs: T) {
  const key1 = Object.keys(lfs);
  const value1 = Object.values(lfs);

  const key2 = Object.keys(rfs);
  const value2 = Object.values(rfs);

  if (key1.length !== key2.length || value1.length !== value2.length) {
    return false;
  }

  key1.sort();
  key2.sort();
  value1.sort();
  value2.sort();
  for (let i = 0; i < key1.length; i++) {
    if (!deepEqual(key1[i], key2[i])) {
      return false;
    }
    if (!deepEqual(value1[i], value2[i])) {
      return false;
    }
  }

  return true;
}

export default function deepEqual<T>(lfs: T, rfs: T) {
  if (typeOfData(lfs) !== typeOfData(rfs)) return false;
  let isEqual = lfs === rfs;
  if (typeof lfs === 'object' && typeof rfs === 'object') {
    if (isArray(lfs) && isArray(rfs)) {
      // array
      isEqual = deepEqualByArray(lfs, rfs);
    } else if ((isSet(lfs) && isSet(rfs)) || (isMap(lfs) && isMap(rfs))) {
      // set
      let arrLfs = Array.from(lfs);
      let arrRfs = Array.from(rfs);
      isEqual = deepEqualByArray(arrLfs, arrRfs, true);
    } else if (isDate(lfs) && isDate(rfs)) {
      // date
      isEqual = lfs.getTime() === rfs.getTime();
    } else if (isNull(lfs) && isNull(rfs)) {
      // null
      isEqual = true;
    } else {
      isEqual = deepEqualByObject(lfs as any, rfs);
    }
  } else if (typeof lfs === 'function' && typeof rfs === 'function') {
    // function
    isEqual = lfs.toString() === rfs.toString();
  } else if (typeof lfs === 'symbol' && typeof rfs === 'symbol') {
    // symbol
    isEqual = lfs.toString() === rfs.toString();
  } else {
    // others

    // number && NaN
    if (isNumber(lfs) && isNumber(rfs) && isNaN(lfs) && isNaN(rfs)) return true;
    isEqual = lfs === rfs;
  }
  return isEqual;
}
