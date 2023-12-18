import { useState } from 'react';
import { isFunction } from '../utils/is/isTypings';
const useDefault = <T>(defaultVal: T, initialVal: T) => {
  const [state, setState] = useState(initialVal);

  const updateState = (value: T | null | undefined | ((prev: T) => T)) => {
    if (isFunction(value)) {
      setState((prev) => value(prev));
    } else if (value === null || value === undefined) {
      setState(defaultVal);
    } else {
      setState(value);
    }
  };
  return [state, updateState] as const;
};
export default useDefault;
