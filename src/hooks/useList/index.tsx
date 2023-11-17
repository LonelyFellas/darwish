import { useMemo, useRef } from 'react';
import { isFunction } from '../../utils/is/isTypings';
import useUpdate from '../useUpdate';

const resolveHooksState = <T extends Array<unknown>>(
  newList: IHookState<T>,
  oldList: T,
): T => {
  if (isFunction(newList)) {
    return newList.length ? newList(oldList) : newList([] as any);
  }
  return newList;
};

function useList<T>(initialList: Array<T>): [Array<T>, IUseListUtil<T>] {
  const list = useRef(resolveHooksState(initialList, []));
  const updateFn = useUpdate();
  const utils = useMemo<IUseListUtil<T>>(() => {
    return {
      set: (newList: IHookState<T[]>) => {
        list.current = resolveHooksState(newList, list.current);
        updateFn();
      },
      push: (newItem: T) => {
        utils.set([...list.current, newItem]);
      },
      updateAt: (updateIndex: number, updateItem: T) => {
        utils.set(
          list.current.map((item, i) =>
            i === updateIndex ? updateItem : item,
          ),
        );
      },
      insertAt: (insertIndex: number, insertItem: T) => {
        utils.set((prev: T[]) => {
          let resArr: Array<T> = [];
          prev.forEach((item, i) => {
            if (i === insertIndex) {
              resArr.push(insertItem);
            }
            resArr.push(item);
          });
          return resArr;
        });
      },
      update: (predicate: (a: T, b: T) => boolean, updateItem: T) => {
        utils.set((prev: T[]) =>
          prev.map((item) => (predicate(item, updateItem) ? updateItem : item)),
        );
      },
      updateFirst: (predicate: (a: T, b: T) => boolean, updateItem: T) => {
        const index = list.current.findIndex((item) =>
          predicate(item, updateItem),
        );
        if (index >= 0) {
          utils.updateAt(1, updateItem);
        }
      },
      upsert: (predicate: (a: T, b: T) => boolean, updateItem: T) => {
        const index = list.current.findIndex((item) =>
          predicate(item, updateItem),
        );
        if (index >= 0) {
          utils.updateAt(1, updateItem);
        } else {
          utils.push(updateItem);
        }
      },
      sort: (compareFn: (a: T, b: T) => number) => {
        utils.set([...list.current].sort(compareFn));
      },
      filter: (
        callbackFn: (value: T, index: number, array: T[]) => boolean,
        thisArg?: any,
      ) => {
        utils.set((curr: T[]) => curr.slice().filter(callbackFn, thisArg));
      },
      removeAt: (index: number) => {
        utils.set((prev: T[]) => {
          const arr = prev.slice();
          arr.splice(index, 1);
          return arr;
        });
      },
      clear: () => {
        utils.set([]);
      },
      reset: () => {
        utils.set(initialList);
      },
    };
  }, []);

  return [list.current, utils];
}

export default useList;
