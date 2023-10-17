import jsCookie from 'js-cookie';
import { useCallback, useState } from 'react';
export default function useCookie(cookieName: string) {
  const [cookieValue, setCookieValue] = useState(
    () => jsCookie.get(cookieName) || null,
  );
  const updateCookie = useCallback(
    (value: string, option?: jsCookie.CookieAttributes) => {
      jsCookie.set(cookieName, value, option);
      setCookieValue(value);
    },
    [cookieName],
  );

  const deleteCookie = useCallback(() => {
    jsCookie.remove(cookieName);
    setCookieValue(null);
  }, [cookieName]);

  return [cookieValue, updateCookie, deleteCookie] as const;
}
