export type AllType =
  | 'null'
  | 'undefined'
  | 'string'
  | 'boolean'
  | 'object'
  | 'array'
  | 'symbol'
  | 'date'
  | 'function'
  | 'regexp'
  | 'set'
  | 'map';
/**
 * @test ✅Tested (已通过测试放心使用)
 * @description Check out any type for any data (检查任何数据的任何类型)
 * @param data dataSource(数据源)
 * @returns return a union type ('null' | 'undefined' | 'string' | 'boolean' | 'object' | 'array' | 'symbol' | 'date' | 'function' | 'regexp' | 'set' | 'map')
 */
export default function typeOfData(data: unknown): AllType {
  try {
    return Object.prototype.toString
      .call(data)
      .slice(8, -1)
      .toLowerCase() as AllType;
  } catch (error) {
    return 'null';
  }
}
