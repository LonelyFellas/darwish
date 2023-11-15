import { isArray, isDate, isMap, isObject, isSet } from './isTypings';
type Nullable = undefined | null | never | Darwish.EmptyObject;
/**
 *
 * @param data 支持所有基本类型,还有[],{},Set,Map,Date的判断，true则数据空或者数据错误
 */
type CustomNullable<T> = Extract<T, Nullable> | Extract<Nullable, T>;
export default function isBlanks<T>(data: T): data is CustomNullable<T> {
  if (data === Infinity) {
    return !!data;
  }
  // 判断数组类型
  if (isArray(data)) {
    return !data.length;
  }
  // 判断Object类型
  if (isObject(data)) {
    const propsArr = Object.getOwnPropertyNames(data);
    return !propsArr.length;
  }

  // 判断空格的字符串和转义符
  if (typeof data === 'string') {
    return /^\s*$/.test(data);
  }

  // 判断空Set和空Map
  if (isMap(data) || isSet(data)) {
    return data.size === 0;
  }

  // 判断错误时间
  if (isDate(data)) {
    return Number.isNaN(data.getTime());
  }
  return !Boolean(data);
}
