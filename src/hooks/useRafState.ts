import { useCallback, useState, useRef } from 'react';
import useUnmount from './useUnmount';

/**
 * @description 用 requestAnimationFrame 来更新 state
 * @param initialState initial state
 * @returns [state, setState]
 * @example
 * const [state, setState] = useRafState(0);
 * const [state, setState] = useRafState(() => 0);
 */
const useRafState = <S>(initialState: S | (() => S)) => {
  const frame = useRef(0);
  const [state, setState] = useState(initialState);

  const setRafState = useCallback((value: S | ((prevState: S) => S)) => {
    cancelAnimationFrame(frame.current);
    frame.current = window.requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  useUnmount(() => {
    window.cancelAnimationFrame(frame.current);
  });

  return [state, setRafState] as const;
};
export default useRafState;
