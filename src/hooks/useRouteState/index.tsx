import { useCallback } from 'react';
import useUpdate from '../useUpdate';

export default function useRouteState() {
  const updated = useUpdate();
  const pushUrlParam = (key: string, value: any) => {
    const url = new URL(window.location.href);
    let state = '';
    if (typeof value === 'object') {
      state = JSON.stringify(value, (k, v) => {
        if (v === undefined) {
          return '_undefined_';
        }
        return value;
      });
    } else {
      state = value;
    }
    url.searchParams.set(key, state);
    window.history.pushState({}, '', url);
    updated();
  };
  const getUrlParam = useCallback((key: string) => {
    const url = new URL(window.location.href);
    const value = url.searchParams.get(key);
    if (value === null) {
      return null;
    }
    if (value === '_undefined_') {
      return undefined;
    }
    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
    return value;
  }, []);
  return {
    pushUrlParam,
    getUrlParam,
  };
}
