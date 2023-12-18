import { useMemo, useState } from 'react';
export type UseToggleActions<T> = {
  toggle: () => void;
  set: (settingValue: T) => void;
  setLeft: () => void;
  setRight: () => void;
};
function useToggle<T = boolean>(): [boolean, UseToggleActions<T>];

function useToggle<T>(): [T, UseToggleActions<T>];

function useToggle<T, U>(
  defaultValue: T,
  reverseValue: U,
): [T | U, UseToggleActions<T | U>];

function useToggle<T, U>(
  defaultValue: T = false as unknown as T,
  reverseValue?: U,
) {
  const [state, setState] = useState<T | U>(defaultValue);

  const action = useMemo(() => {
    const reverseValueOrigin = (
      reverseValue === 'undefined' ? !defaultValue : reverseValue
    ) as T | U;

    const toggle = () => {
      setState((prev) =>
        prev === defaultValue ? reverseValueOrigin : defaultValue,
      );
    };
    const set = (settingValue: T | U) => {
      setState(settingValue);
    };
    const setLeft = () => {
      setState(defaultValue);
    };
    const setRight = () => {
      setState(reverseValueOrigin);
    };

    return {
      toggle,
      set,
      setLeft,
      setRight,
    };
  }, []);

  return [state, action];
}

export default useToggle;
