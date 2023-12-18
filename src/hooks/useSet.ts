import { useCallback, useMemo, useState } from 'react';
import { isArray } from '../utils/is/isTypings';

export default function useSet<T>(initialValue: Array<T> | Set<T>) {
  const init = useCallback(() => {
    if (isArray(initialValue)) {
      return new Set(initialValue);
    }
    return new Set(initialValue);
  }, [initialValue]);
  const [state, setState] = useState(init);

  const has = useCallback(
    (hasValue: T) => {
      return state.has(hasValue);
    },
    [initialValue, state],
  );

  const stableActions = useMemo(() => {
    return {
      add: (addValue: T) => {
        setState((prev) => new Set([...Array.from(prev), addValue]));
      },
      remove: (removeValue: T) => {
        setState(
          (prev) => new Set(Array.from(prev).filter((v) => v !== removeValue)),
        );
      },
      toggle: (toggleValue: T) => {
        if (has(toggleValue)) {
          stableActions.remove(toggleValue);
        } else {
          stableActions.add(toggleValue);
        }
      },
      reset: () => {
        setState(init);
      },
    };
  }, [setState, state]);

  const utils = {
    has,
    ...stableActions,
  };
  return [state, utils] as const;
}
