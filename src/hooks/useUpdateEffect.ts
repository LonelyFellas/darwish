import { useEffect } from 'react';
import useFirstMountState from './useFirstMountState';
const useUpdateEffect: typeof useEffect = (effect, deps) => {
  const firstMountState = useFirstMountState();

  useEffect(() => {
    if (!firstMountState) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
