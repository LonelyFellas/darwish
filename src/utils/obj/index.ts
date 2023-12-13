import { isObject } from 'darwish';

export default class ExtendObject extends Object {
  static pick = <T extends Record<PropertyKey, any>>(
    dataSource: T,
    pickKeys: (keyof T)[],
  ) => {
    if (isObject(dataSource)) {
      console.error('DataSource 不是一个Object');
    }

    // TODO 可能要判断datasource 进来是否是一个object类型
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
    }

    const obj: Partial<T> = {};
    if (Array.isArray(omitKeys)) {
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
}
