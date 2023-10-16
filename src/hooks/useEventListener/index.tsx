import { isBrowser } from 'darwish';
import { useLayoutEffect } from 'react';

export default function useEventListener<K extends keyof WindowEventMap>(
  name: Window,
  event: K,
  callback: (this: Window, ev: WindowEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void {
  useLayoutEffect(() => {
    if (!isBrowser) return;
    name.addEventListener(event, callback, options);
    return () => name.removeEventListener(event, callback, options);
  });
}
