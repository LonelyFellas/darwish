/**
 * 处理数据量小的的数据源，这里使用reduce
 * @param dataArray 被去重的数据源
 * @param uniqueId 唯一Id的属性名
 * @returns
 */
export function uniqueObjectOfArray<T extends Record<PropertyKey, any>>(
  dataArray: T[],
  uniqueId: keyof T = 'id',
) {
  const uniqueArray = dataArray.reduce((acc: T[], current: T) => {
    if (!acc.find((item) => item[uniqueId] === current[uniqueId])) {
      acc.push(current);
    }
    return acc;
  }, []);
  return uniqueArray;
}

/**
 * 处理数据量大的数据源，这里使用Map
 * @param dataArray 被去重的数据源
 * @param uniqueId 唯一Id的属性名
 * @returns
 */
export function uniqueObjectOfArrayToMap<T extends Record<PropertyKey, any>>(
  dataArray: T[],
  uniqueId: keyof T = 'id',
) {
  const uniqueMap = new Map(dataArray.map((obj) => [obj[uniqueId], obj]));
  const uniqueArray = Array.from(uniqueMap.values());
  return uniqueArray;
}
