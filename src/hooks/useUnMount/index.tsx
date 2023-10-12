import { isFunction, isDev, useLatest } from "darwish";
import { useEffect } from "react";

export default function useUnmount(fn: () => void) {
  if (isDev && !isFunction(fn)) {
    console.error(`useUnmount expected parameter is a function, got ${typeof fn}`);
  }

  const fnRef = useLatest(fn);

  useEffect(
    () => () => {
      fnRef.current();
    }, []
  )
}