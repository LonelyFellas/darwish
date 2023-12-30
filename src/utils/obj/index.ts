import { isArray, isBlanks, isObject } from '../is';

export default class ExtendObject extends Object {
  /**
   * @description pick keys from dataSource 
   * @param dataSource data source 
   * @param pickKeys pick keys 
   * @returns picked object 
   */
  static pick = <T extends Darwish.AnyObj, const K extends keyof T>(
    dataSource: T,
    pickKeys: K[],
  ): Pick<T, K> => {
    if (!isObject(dataSource)) {
      console.error('DataSource is not an `object`');
      return dataSource;
    }
    if (!isArray(pickKeys)) {
      console.error(
        `PickKeys: ${JSON.stringify(pickKeys)} is not an \`array\``,
      );
      return dataSource;
    }

    const obj: any = {};
    pickKeys?.forEach((key) => {
      if (key in dataSource) {
        obj[key] = dataSource[key];
      }
    });
    return obj;
  };

  /**
   * @description omit keys from dataSource 
   * @param dataSource data source 
   * @param omitKeys omit keys 
   * @returns omitted object 
   */
  static omit = <T extends Darwish.AnyObj, const K extends keyof T>(
    dataSource: T,
    omitKeys: K[],
  ): Omit<T, K> => {
    if (!isObject(dataSource)) {
      console.error('DataSource is not an `object`');
      return dataSource;
    }
    if (!isArray(omitKeys)) {
      console.error(
        `OmitKeys: ${JSON.stringify(omitKeys)} is not an \`array\``,
      );
      return dataSource;
    }

    const obj: any = {};
    const keysSet = new Set<keyof T>(omitKeys);
    Object.keys(dataSource).forEach((key) => {
      if (!keysSet.has(key)) {
        obj[key] = dataSource[key];
      }
    });
    return obj;
  };

  /**
   * @description filter useless key-value from dataSource 
   * @param dataSource data source 
   * @param isFilterEmptyString is filter empty string 
   * @returns filtered object 
   */
  static filterUseless = <T extends Darwish.AnyObj>(
    dataSource: T,
    isFilterEmptyString: boolean = false,
  ) => {
    if (!isObject(dataSource)) {
      console.error('DataSource is not an `object`');
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
