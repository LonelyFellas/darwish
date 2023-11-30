export default class ExtendObject extends Object {
  static pick = <T extends Record<PropertyKey, any>>(
    dataSource: T,
    pickKeys: (keyof T)[],
  ) => {
    const obj: Partial<T> = {};
    if (Array.isArray(pickKeys)) {
      pickKeys?.forEach((key) => {
        if (key in dataSource) {
          obj[key] = dataSource[key];
        }
      });
    } else {
    }
    return obj;
  };
  static omit = <T extends Record<PropertyKey, any>>(
    dataSource: T,
    omitKeys: (keyof T)[],
  ) => {
    const obj: Partial<T> = {};
    if (Array.isArray(omitKeys)) {
      Object.keys(dataSource).forEach((key: keyof T) => {
        if (!omitKeys.includes(key)) {
          obj[key] = dataSource[key];
        }
      });
    }
    return obj;
  };
}
