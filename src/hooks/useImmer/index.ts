import { freeze, produce } from 'immer';
import { useCallback, useState } from 'react';

export function useImmer<S = any>(initialValue: S | (() => S)): ImmerHook<S>;

export default function useImmer(initialValue: any) {
  const [val, updateValue] = useState(() =>
    freeze(
      typeof initialValue === 'function' ? initialValue() : initialValue,
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
