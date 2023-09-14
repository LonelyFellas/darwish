import typeOfData from './typeOfData';

export const sortOrder =
  (c: number = 1) =>
  (a: any, b: any) => {
    const type1 = typeOfData(a);
    const type2 = typeOfData(b);
    const dataArr = c === 1 ? [a, b] : [b, a];
    return dataArr[0].value - dataArr[1].value;
  };

const arr = [
  { text: 1, value: 1 },
  { text: 2, value: 2 },
];
console.log(arr.sort(sortOrder(2)));
