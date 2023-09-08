import { isDate, isMap, isObject, isSet, typeOfData } from 'darwish';
export function deepEqualByArray<T extends any[]>(lfs: T[], rfs: T[]) {
  if (lfs.length !== rfs.length) {
    return false;
  }

  lfs.sort();
  rfs.sort();
  for (let i = 0; i < lfs.length; i++) {
    if (isObject(lfs[i]) && isObject(rfs[i])) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (!deepEqualByObject(lfs[i], rfs[i])) {
        return false;
      }
    } else if (Array.isArray(lfs[i]) && Array.isArray(rfs[i])) {
      if (!deepEqualByArray(lfs[i], rfs[i])) {
        return false;
      }
    } else if (lfs[i] !== rfs[i]) {
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
    if (key1[i] !== key2[i]) {
      return false;
    }
    if (isObject(value1[i]) && isObject(value2[i])) {
      if (!deepEqualByObject(value1[i], value2[i])) {
        return false;
      }
    } else if (Array.isArray(value1[i]) && Array.isArray(value2[i])) {
      if (!deepEqualByArray(value1[i], value2[i])) {
        return false;
      }
    } else if (value1[i] !== value2[i]) {
      return false;
    }
  }

  return true;
}

export default function deepEqual<T>(lfs: T, rfs: T) {
  if (typeOfData(lfs) !== typeOfData(rfs)) return false;
  let isEqual = lfs === rfs;
  if (isDate(lfs) && isDate(rfs)) {
    isEqual = lfs.getTime() === rfs.getTime();
  } else if ((isSet(lfs) && isSet(rfs)) || (isMap(lfs) && isMap(rfs))) {
    let arrLfs = Array.from(lfs);
    let arrRfs = Array.from(rfs);
    isEqual = deepEqualByArray(arrLfs, arrRfs);
  } else if (isObject(lfs) && isObject(rfs)) {
    isEqual = deepEqualByObject(lfs, rfs);
  } else if (Array.isArray(lfs) && Array.isArray(rfs)) {
    isEqual = deepEqualByArray(lfs, rfs);
  }

  return isEqual;
}
