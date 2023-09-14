import deepEqual from './deepEqual';
import { isArray, isObject } from './isTypings';
export default class ListObj {
  dataSource: Array<unknown> = [];
  constructor() {}
  add = (value: unknown) => {
    if (isObject(value)) {
      if (this.contains(value)) return;
      this.dataSource.push(value);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (this.contains(value[i])) {
          continue;
        }
        this.dataSource.push(value[i]);
      }
    } else {
      console.error('nothing all change');
    }
  };
  remove = (option: {
    index?: number;
    target?: unknown;
    primaryKeyOfValue?: { primaryKey: string; value: any };
  }) => {
    const { index, target, primaryKeyOfValue } = option;
    if (index !== undefined) {
      this.dataSource = this.dataSource.filter((_, i) => i !== index);
    } else if (primaryKeyOfValue !== undefined) {
      this.dataSource = this.dataSource.filter((item) => {
        if (isObject(item)) {
          item[primaryKeyOfValue.primaryKey] === primaryKeyOfValue;
        } else {
          return false;
        }
      });
    } else if (target !== undefined) {
      this.dataSource = this.dataSource.filter(
        (item) => !deepEqual(item, target),
      );
    }
  };
  sort = () => {};
  contains = (value: unknown) => {
    return this.dataSource.some((item) => deepEqual(item, value));
  };
}

// const listObj = new ListObj();
// listObj.add({ text: 1, value: 1 });
// listObj.add({ a: 1 });
// listObj.add({ a: 1 });
// listObj.add({ a: 1 });
// listObj.add({ a: 2 });
// console.log(listObj.dataSource);
// listObj.remove({ index: 1 });
// console.log(listObj.dataSource);
// listObj.remove({ target: { a: 2 } });
// console.log(listObj.dataSource);
// listObj.remove({ primaryKeyOfValue: { primaryKey: 'text', value: 1 } });
// console.log(listObj.dataSource);
