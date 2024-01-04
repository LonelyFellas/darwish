export { default as chunkArray } from './chunkArray';
export { default as shuffleArray } from './shuffleArray';
export {
  uniqueObjectOfArray,
  uniqueObjectOfArrayToMap,
} from './uniqueObjectOfArray';

import { isArray, isObject } from '../is';

export default class ExtendArray<T> extends Array implements Array<T> {
  value: T[] = [];

  constructor(length: number);
  constructor(...items: T[]);
  constructor(value: T[]);
  constructor(value: any) {
    super();
    if (isArray(value)) {
      this.value = value;
    }
  }

  /**
   * @description Chunk array
   * @param array Data source
   * @param size Chunk size
   * @returns A new data of chunked array
   */
  static chunk = <T>(array: T[], size: number): T[][] => {
    if (!isArray(array)) {
      return [];
    }
    let count = 0;
    let index = 0;
    const result: T[][] = [];
    array.forEach((it) => {
      if (count === 0) {
        result.push([]);
      }
      result[index].push(it);
      if (count === size - 1) {
        index++;
        count = 0;
      } else {
        count++;
      }
    });
    return result;
  };
  chunk = ExtendArray.chunk;
  /**
   * @property `static` chunk array
   * @description Shuffle array
   * @param array Data source
   * @returns A new data of shuffled array
   */
  static shuffle = <T>(array: T[]): T[] => {
    if (!isArray(array)) {
      return [];
    }
    let index = -1;
    const lastIndex = length - 1;
    const result = [...array];
    while (++index < length) {
      const rand = index + Math.floor(Math.random() * (lastIndex - index + 1));
      const value = result[rand];
      result[rand] = result[index];
      result[index] = value;
    }
    return result;
  };
  /**
   * @description shuffle array
   * @param array data source
   * @returns a new data of shuffled array
   */
  toShuffle = ExtendArray.shuffle;
  /**
   * @description shuffle this.value
   */
  shuffle = () => {
    this.value = this.toShuffle(this.value);
  };

  /**
   * Don't use this method
   * @private
   * @description Unique array
   * @param array data source
   * @returns unique array
   */
  unique = <T>(array: T[]): T[] => {
    const length = array === null ? 0 : array.length;
    if (!length) {
      return [];
    }
    let index = -1;
    const result = [];
    while (++index < length) {
      const value = array[index];
      if (result.indexOf(value) === -1) {
        result.push(value);
      }
    }
    return result;
  };
  /**
   * Don't use this method
   * @private
   * @description Unique array by key
   * @param array data source
   * @param key unique key
   * @returns unique array
   */
  uniqueBy = <T, K extends keyof T>(array: T[], key: K): T[] => {
    const uniqueArray = array.reduce((acc: T[], current: T) => {
      if (!acc.find((item) => item[key] === current[key])) {
        acc.push(current);
      }
      return acc;
    }, []);
    return uniqueArray;
  };
  /**
   * Don't use this method
   * @private
   * @description Unique array by map
   * @param array data source
   * @param key unique key
   * @returns unique array
   */
  uniqueByMap = <T, K extends keyof T>(array: T[], key: K): T[] => {
    const uniqueMap = new Map(array.map((obj) => [obj[key], obj]));
    const uniqueArray = Array.from(uniqueMap.values());
    return uniqueArray;
  };

  /**
   * TODO 其他类型的数组没有extends
   * @param dataSource
   * @param key
   * @returns
   */
  findIndex<const T extends string[] | number[] | boolean[]>(
    dataSource: T,
    key: T[number],
  ): number;
  findIndex<T extends Record<PropertyKey, any>, V>(
    dataSource: T[],
    key: keyof T,
    value: V,
    index?: number | 'first' | 'last',
  ): number;
  findIndex<T>(
    predicate: (value: T, index: number, obj: T[]) => unknown,
    thisArg?: any,
  ): number;
  findIndex(
    dataSource: any[] | Darwish.AnyFunc,
    key: any,
    value?: any,
    index?: any,
  ): number {
    if (!isArray(dataSource)) {
      console.error('DataSource is not an `array`');
      return -1;
    }

    if (dataSource.length === 0) return -1;

    if (
      ['number', 'boolean', 'string', 'symbol', 'bigint'].includes(
        typeof dataSource[0],
      )
    ) {
      return dataSource.findIndex((item) => item === key);
    }

    if (isObject(dataSource[0])) {
      let count = 0;
      const len = dataSource.length;
      let idx = index;
      if (index === 'first' || index === undefined) {
        idx = 1;
      } else if (index === 'last') {
        idx = -1;
      } else if (index <= 0 || index > len) {
        return -1;
      }
      for (let i = 0; i < len; i++) {
        if (dataSource[i][key] === value) {
          console.log(count, 'count');

          count++;

          if (count === idx) {
            return i;
          }
        }
      }
    }

    return -1;
  }

  static forEachArr<T>(
    dataArray: T[],
    callbackfn: (value: T, index: number, array: T[]) => boolean,
  ) {
    let index = -1;
    while (++index < dataArray.length) {
      if (callbackfn(dataArray[index], index, dataArray)) {
        break;
      }
    }
  }
  static forEachObj<T extends Darwish.AnyObj>(
    dataObj: T,
    callbackfn: (value: T[keyof T], key: keyof T, index: number, obj: T) => boolean,
  ) {
    let index = -1;
    const keys = Object.keys(dataObj);
    while (++index < keys.length) {
      if (callbackfn(dataObj[keys[index]], keys[index], index, dataObj)) {
        break;
      }
    }
  }
  static forEachArrLike<T>(
    dataArray: ArrayLike<T>,
    callbackfn: (value: T, index: number, array: ArrayLike<T>) => boolean,
  ) {
    let index = -1;
    while (++index < dataArray.length) {
      if (callbackfn(dataArray[index], index, dataArray)) {
        break;
      }
    }
  }
}

ExtendArray.forEachObj({ a: 1, b: 2 }, (value, key, index, obj) => {
  console.log(value, key, index, obj);
  return false;
})
