/* eslint-disable no-param-reassign */
import { isArray, isObject, isString } from './is';

/**
 * @description Get value from object by path.
 * @test Tested (已加入测试放心使用)
 * @param obj The object to query.
 * @param key The key of the property to get.
 * @param def The default value.
 * @param p The index of the key.
 * @param undef The undefined value.
 */
export default function dlv<T>(
  obj: Darwish.AnyObj,
  key: string | string[],
  def?: string,
  p?: number,
  undef?: T,
) {
  if (!isObject(obj)) {
    console.error('obj is not an object');
    return obj;
  }

  let keys: any[] = [];
  if (isString(key)) {
    keys = key.split ? key.split('.') : [];
  } else if (isArray(key)) {
    keys = key;
  }

  let data = Object.assign({}, obj);
  for (p = 0; p < keys.length; p++) {
    const findKey = keys[p];
    data = isObject(data) && findKey in data ? data[findKey] : undef;
  }
  return data === undef ? def : data;
}

