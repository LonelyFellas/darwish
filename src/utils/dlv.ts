export default function dlv<T extends Record<PropertyKey, any>>(
  obj: T,
  key: string = '',
  def: unknown = '',
  p: number = 0,
  undef: unknown = '',
) {
  let obj1 = { ...obj };
  const keyArr = key.split ? key.split('.') : key;
  for (let p1 = p; p1 < keyArr.length; p1++) {
    obj1 = obj1 ? obj1[keyArr[p1] as keyof T] : (undef as any);
  }
  return obj1 === undef ? def : obj1;
}
