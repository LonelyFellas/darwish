export const sortOrder =
  (c: number = 1) =>
  (a: any, b: any) => {
    const dataArr = c === 1 ? [a, b] : [b, a];
    return dataArr[0].value - dataArr[1].value;
  };
