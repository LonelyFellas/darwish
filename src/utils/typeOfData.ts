/**
 * @description 检测数据类型
 * @param data 需要判断的类型的数据，可以是任何数据去判断出任何类型
 * @returns 返回是一个类型结果字符串 'null' | 'undefined' | 'string' | 'boolean' | 'object' | 'array' | 'symbol' | 'date' | 'function' | 'RegExp' | 'Set'
 */

export default function typeOfData(data: unknown): Darwish.AnyType {
  try {
    return Object.prototype.toString
      .call(data)
      .slice(8, -1)
      .toLowerCase() as Darwish.AnyType;
  } catch (error) {
    return 'null';
  }
}
