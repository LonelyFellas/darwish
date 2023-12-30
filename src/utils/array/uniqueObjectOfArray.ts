/**
 * @deprecated Please use ExtendArray.uniqueBy (请使用 ExtendArray.uniqueBy 方法)
 * 处理数据量小的的数据源，这里使用reduce
 * @param dataArray data source 
 * @param uniqueId unique key 
 * @returns unique array
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
 * @deprecated Please use ExtendArray.uniqueByMap (请使用 ExtendArray.uniqueByMap 方法)
 * 处理数据量大的数据源，这里使用Map
 * @param dataArray data source 
 * @param uniqueId unique key 
 * @returns unique array
 */
export function uniqueObjectOfArrayToMap<T extends Record<PropertyKey, any>>(
  dataArray: T[],
  uniqueId: keyof T = 'id',
) {
  const uniqueMap = new Map(dataArray.map((obj) => [obj[uniqueId], obj]));
  const uniqueArray = Array.from(uniqueMap.values());
  return uniqueArray;
}
