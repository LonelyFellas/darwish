import { get, remove, set, type CookieAttributes } from 'js-cookie';
import { useCallback, useState } from 'react';
export default function useCookie(cookieName: string) {
  const [cookieValue, setCookieValue] = useState(() => get(cookieName) || null);
  const updateCookie = useCallback(
    (value: string, option?: CookieAttributes) => {
      set(cookieName, value, option);
      setCookieValue(value);
    },
    [cookieName],
  );

  const deleteCookie = useCallback(
    (option?: CookieAttributes) => {
      remove(cookieName, option);
      setCookieValue(null);
    },
    [cookieName],
  );

  return [cookieValue, updateCookie, deleteCookie] as const;
}
