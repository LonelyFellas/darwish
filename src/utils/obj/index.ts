import { isArray, isBlanks, isObject } from '../is';

export default class ExtendObject extends Object {
  static pick = <T extends Darwish.AnyObj>(
    dataSource: T,
    pickKeys: (keyof T)[],
  ) => {
    if (!isObject(dataSource)) {
      console.error('DataSource 不是一个Object');
      return dataSource;
    }

    const obj: Partial<T> = {};
    if (isArray(pickKeys)) {
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
  static omit = <T extends Darwish.AnyObj>(
    dataSource: T,
    omitKeys: (keyof T)[],
  ) => {
    if (!isObject(dataSource)) {
      console.error('DataSource 不是一个Object');
      return dataSource;
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

  static filterUseless = <T extends Darwish.AnyObj>(
    dataSource: T,
    isFilterEmptyString: boolean = false,
  ) => {
    if (!isObject(dataSource)) {
      console.error('DataSource 不是一个Object');
      return dataSource;
    }
    const obj: Partial<T> = {};
    Object.entries(dataSource).forEach(([key, value]) => {
      const bool = isFilterEmptyString
        ? isBlanks(value)
        : value === undefined || value === null;
      if (bool) {
        obj[key as keyof T] = value;
      }
    });
  };
}
