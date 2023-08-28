import { Draft, freeze, produce } from 'immer';
import { useCallback, useState } from 'react';

export type DraftFunction<T> = (draft: Draft<T>) => void;
export type Updater<T> = (arg: T | DraftFunction<T>) => void;
export type ImmerHooks<T> = [T, Updater<T>];
export function useImmer<T>(initialValue: T | (() => T)): ImmerHooks<T>;
export default function useImmer<T>(initialValue: T) {
  const [val, updateValue] = useState(() =>
    freeze(
      typeof initialValue === 'function' ? initialValue() : initialValue,
      true,
    ),
  );

  return [
    val,
    useCallback((updater: Updater<typeof val>) => {
      if (typeof initialValue === 'function') updateValue(produce(updater));
      else updateValue(produce(updater));
    }, []),
  ];
}
