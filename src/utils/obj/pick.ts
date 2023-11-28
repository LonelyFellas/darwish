export default class DarwishObj<T extends Record<PropertyKey, any>> {
  dataSource: T;
  constructor(initVal: T) {
    this.dataSource = initVal;
  }
  pick = (pickKeys: (keyof T)[]) => {
    const obj = {} as T;
    if (Array.isArray(pickKeys)) {
      pickKeys?.forEach((key) => {
        if (key in this.dataSource) {
          obj[key] = this.dataSource[key];
        }
      });
    } else {
    }
    return obj;
  };
  omit = (omitKeys: (keyof T)[]) => {
    const obj = {} as T;
    if (Array.isArray(omitKeys)) {
      Object.keys(this.dataSource).forEach((key: keyof T) => {
        if (!omitKeys.includes(key as keyof T)) {
          obj[key] = this.dataSource[key];
        }
      });
    }
    return obj;
  };
}
const info = {
  name: 'darwish',
  age: 22,
  hobby: 'reading',
};
const darwishObj = new DarwishObj(info);
const picked = darwishObj.pick(['name', 'age']);
const omitted = darwishObj.omit(['name', 'age']);
console.log(picked);
console.log(omitted);
