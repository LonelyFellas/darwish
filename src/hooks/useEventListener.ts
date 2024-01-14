import { useEffect } from 'react';
import isBrowser from '../utils/is/isBrowser';
/**
 *
 * @param name 111
 * @param event
 * @param callback
 * @param options
 */
export default function useEventListener<
  K extends keyof HTMLElementEventMap,
  U extends Darwish.ElementRef<any>,
>(
  name: React.RefObject<U>,
  event: K,
  callback: (this: U, ev: HTMLElementEventMap[K]) => any,
  options?: boolean | AddEventListenerOptions,
): void;

/**
 *
 * @param name 222
 * @param event
 * @param callback
 * @param option
 */
export default function useEventListener<K extends keyof WindowEventMap>(
  name: Window,
  event: K,
  callback: (this: Window, ev: WindowEventMap[K]) => any,
  option?: boolean | AddEventListenerOptions,
): void;

export default function useEventListener<
  K extends keyof WindowEventMap & keyof HTMLElementEventMap,
  U extends Darwish.ElementRef<Darwish.ElementLabel>,
>(
  name: Window | React.RefObject<U>,
  event: K,
  callback: (
    this: Window,
    ev: WindowEventMap[K],
  ) => any | ((this: U, ev: HTMLElementEventMap[K]) => any),
  options?: boolean | AddEventListenerOptions,
): void {
  useEffect(() => {
    if (!isBrowser) return;

    if (name === window) {
      name.addEventListener(event, callback, options);
      return () => name.removeEventListener(event, callback, options);
    } else if (name && 'current' in name && name.current) {
      name.current.addEventListener(event, callback as any, options);
      return () => {
        if (name && 'current' in name && name.current) {
          name.current.removeEventListener(event, callback as any, options);
        }
      };
    }
  }, [name]);
}
