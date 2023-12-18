import { useMemo, useState } from 'react';
import useDisplayDevError from './useDisplayDevError';
const useSyncState = <T extends object>(initialValue: T) => {
  const [state, setState] = useState(initialValue);
  const dispatchError = useDisplayDevError();

  const proxy = useMemo(() => {
    return new Proxy(initialValue, {
      set(obj, prop, value) {
        try {
          obj[prop as keyof T] = value;
          setState((prevState) => {
            return {
              ...prevState,
              prop: state,
            };
          });
          return true;
        } catch (error) {
          dispatchError(error);
          return false;
        }
      },
    });
  }, []);

  return proxy;
};

export default useSyncState;
