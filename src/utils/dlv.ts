export default function dlv<T extends any>(
  obj: T,
  key: string = '',
  def: unknown = '',
  p: number = 0,
  undef: unknown = '',
) {
  const keyArr = key.split ? key.split('.') : key;
  for (p = 0; p < keyArr.length; p++) {
    obj = obj ? obj[keyArr[p] as keyof T] : (undef as any);
  }
  return obj === undef ? def : obj;
}
