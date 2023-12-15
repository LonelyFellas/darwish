export default function chunkArray<T>(array: T[], chunkSize: number) {
  return array.reduce((result: T[][], item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!result[chunkIndex]) {
      result[chunkIndex] = []; // 开始一个新的子数组
    }

    result[chunkIndex].push(item);

    return result as T[][];
  }, []);
}
