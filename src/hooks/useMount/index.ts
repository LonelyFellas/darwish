import isDev from '../../utils/isDev';
import { isFunction } from '../../utils/isTypings';
import { useEffect } from 'react';

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
