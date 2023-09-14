import { useState } from 'react';

/**
 *
 * @param defaultValue default value -> boolean
 * @returns [boolean, (settingValue: boolean) => void] -> Array
 */

const useBoolean: (defaultValue: boolean) => [boolean, BooleanFn] = (
  defaultValue: boolean,
) => {
  const [state, setState] = useState(defaultValue);

  const toggle = (
    settingValue: boolean | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setState((prev) =>
      typeof settingValue === 'boolean' ? settingValue : !prev,
    );
  };
  return [state, toggle];
};
export default useBoolean;
