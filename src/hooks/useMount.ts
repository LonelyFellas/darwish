import { useEffect } from 'react';
import isDev from '../utils/is/isDev';
import { isFunction } from '../utils/is/isTypings';

export default function useMount(fn: () => void) {
  if (isDev && !isFunction(fn)) {
    console.error(
      `useMount: parameter \`fn\` expected to be a function, but got "${typeof fn}".`,
    );
  }

  useEffect(() => {
    fn?.();
  }, []);
}
