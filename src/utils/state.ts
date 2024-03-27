import { log } from 'console';

type ArrToObj<
  T extends [boolean, string][],
  TempObj extends object | unknown = unknown,
> = T extends [
  infer A extends [boolean, string],
  ...infer R extends [boolean, string][],
]
  ? ArrToObj<R, TempObj & Record<A[1], A[0]>>
  : TempObj;
const stateX = <const T extends [boolean, string][]>(
  states: T,
): ArrToObj<T> => {
  const enumObject = Object.create(null);
  if (states.length === 0) return Object.freeze(enumObject);
  states.forEach(([bool, des]) => {
    enumObject[des] = bool;
  });

  return Object.freeze(enumObject);
};


