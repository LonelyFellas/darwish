/**
 * @deprecated Please use ExtendArray.shuffle (请使用 ExtendArray.shuffle 方法) 
 * @param arr data source 
 * @returns shuffled array (返回一个乱序的数组)
 */
const shuffleArray: <T>(arr:T[])=> T[] =
    (arr) => arr.sort(() => 0.5 - Math.random())
export default shuffleArray;
