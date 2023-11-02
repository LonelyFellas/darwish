import { useCallback, useState } from 'react';

export default function useSetState<
  T extends Record<PropertyKey, any> | (() => Record<PropertyKey, any>),
>(initialValue: T) {
  const [state, setState] = useState<T>(initialValue);

  const update = useCallback(
    (updateValue: Partial<T> | ((args: T) => Partial<T>)) => {
      setState((prevState) => ({
        ...prevState,
        ...(typeof updateValue === 'function'
          ? updateValue(prevState)
          : updateValue),
      }));
    },
    [],
  );

  return [state, update] as const;
}
