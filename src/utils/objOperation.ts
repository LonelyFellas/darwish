import typeOfData from './typeOfData';

export function objCuter<T, U extends keyof T>(recordObj: T, keyArr: U[]) {
  const obj: Pick<T, U> = {} as Pick<T, U>;
  keyArr.forEach((key) => {
    obj[key] = recordObj[key];
    if (
      ['object', 'array', 'date', 'map', 'set'].includes(
        typeOfData(recordObj[key]),
      )
    ) {
      obj[key] = structuredClone(recordObj[key]);
    } else {
      obj[key] = recordObj[key];
    }
  });

  return obj;
}

export function objAssign<T, U, K extends keyof T & keyof U>(
  a: T,
  b: U,
  keys: K[],
) {
  keys.forEach((key) => {
    if (
      ['object', 'array', 'date', 'map', 'set'].includes(typeOfData(a[key]))
    ) {
      // @ts-ignore
      a[key] = structuredClone(b[key]);
    } else {
      // @ts-ignore
      a[key] = b[key];
    }
  });
}
