import { Draft, freeze, produce } from 'immer';
import { useCallback, useState } from 'react';
export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];

export default function useImmer<S = any>(
  initialValue: S | (() => S),
): ImmerHook<S> {
  const [val, updateValue] = useState(() =>
    freeze(
      typeof initialValue === 'function'
        ? (initialValue as (...props: any[]) => any)()
        : initialValue,
      true,
    ),
  );
  return [
    val,
    useCallback((updater: any) => {
      if (typeof updater === 'function') updateValue(produce(updater));
      else updateValue(freeze(updater));
    }, []),
  ];
}
