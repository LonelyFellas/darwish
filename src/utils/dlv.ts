export default function dlv(
  obj: Record<string, string>,
  key: string,
  def: unknown,
  p: number,
  undef: string,
) {
  const newkey = key && key.split ? key.split('.') : [key];
  let newObj = {};
  for (p = 0; p < newkey.length; p++) {
    newObj = obj ? obj[key[p]] : undef;
  }
  return newObj === undef ? def : obj;
}
