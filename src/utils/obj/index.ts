import type { AnyObj } from 'darwish';
import { isArray, isBlanks, isObject } from '../is';

export default class ExtendObject extends Object {
  static pick = <T extends Record<PropertyKey, any>>(
    dataSource: T,
    pickKeys: (keyof T)[],
  ) => {
    if (isObject(dataSource)) {
      console.error('DataSource 不是一个Object');
      return;
    }

    const obj: Partial<T> = {};
    if (Array.isArray(pickKeys)) {
      pickKeys?.forEach((key) => {
        if (key in dataSource) {
          obj[key] = dataSource[key];
        }
      });
    } else {
      console.error(`PickKeys: ${JSON.stringify} 不是个数组`);
    }
    return obj;
  };
  static omit = <T extends Record<PropertyKey, any>>(
    dataSource: T,
    omitKeys: (keyof T)[],
  ) => {
    if (isObject(dataSource)) {
      console.error('DataSource 不是一个Object');
      return;
    }

    const obj: Partial<T> = {};
    if (isArray(omitKeys)) {
      Object.keys(dataSource).forEach((key: keyof T) => {
        if (!omitKeys.includes(key)) {
          obj[key] = dataSource[key];
        }
      });
    } else {
      console.error(`OmitKeys: ${JSON.stringify} 不是个数组`);
    }
    return obj;
  };

  static filterUseless = <T extends AnyObj>(
    dataSource: T,
    isFilterEmptyString: boolean = false,
  ) => {
    if (isObject(dataSource)) {
      const obj: Partial<T> = {};
      Object.entries(dataSource).forEach(([key, value]) => {
        const bool = isFilterEmptyString
          ? isBlanks(value)
          : value === undefined || value === null;
        if (bool) {
          obj[key as keyof T] = value;
        }
      });
    } else {
      console.error('数据源不是一个Object类型');
      return dataSource;
    }
  };
}
