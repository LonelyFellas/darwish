export { default as chunkArray } from './chunkArray';
export { default as shuffleArray } from './shuffleArray';
export {
  uniqueObjectOfArray,
  uniqueObjectOfArrayToMap,
} from './uniqueObjectOfArray';

import { isArray } from "../is"
export default class ExtendArray extends Array {
  /**
   * @description: chunk array 
   * @param array data source
   * @param size chunk size 
   * @returns chunked array 
   */
  static chunk = <T>(array: T[], size: number): T[][] => {
    if (!isArray(array)) {
      return [];
    }
    let count = 0;
    let index = 0;
    const result: T[][] = [];
    array.forEach((item) => {
      if (count === 0) {
        result.push([]);
      }
      result[index].push(item);
      if (count === size - 1) {
        index++;
        count = 0;
      } else {
        count++;
      }
    })
    return result;
  };

  /**
   * @description shuffle array 
   * @param array data source 
   * @returns shuffled array 
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
   * @description unique array 
   * @param array data source 
   * @returns unique array 
   */
  static unique = <T>(array: T[]): T[] => {
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
   * @description unique array by key 
   * @param array data source 
   * @param key unique key 
   * @returns unique array 
   */
  static uniqueBy = <T, K extends keyof T>(array: T[], key: K): T[] => {
    const length = array === null ? 0 : array.length;
    if (!length) {
      return [];
    }
    let index = -1;
    const result = [];
    const map = new Map();
    while (++index < length) {
      const value = array[index];
      const keyValue = value[key];
      if (!map.has(keyValue)) {
        map.set(keyValue, value);
        result.push(value);
      }
    }
    return result;
  };
  /**
   * @description unique array by map 
   * @param array data source 
   * @param key unique key 
   * @returns unique array 
   */
  static uniqueByMap = <T, K extends keyof T>(array: T[], key: K): T[] => {
    const length = array === null ? 0 : array.length;
    if (!length) {
      return [];
    }
    let index = -1;
    const result = [];
    const map = new Map();
    while (++index < length) {
      const value = array[index];
      const keyValue = value[key];
      if (!map.has(keyValue)) {
        map.set(keyValue, value);
        result.push(value);
      }
    }
    return result;
  };
}
