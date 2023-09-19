import { useCallback, useLayoutEffect, useState } from 'react';

let NumberParam: number | null | undefined = Infinity;
let StringParam: string | null | undefined = '';
let BooleanParam: boolean | null | undefined = undefined;
let ArrayParam: number[] | string[] | null | undefined = [];
let ObjectParam: Record<PropertyKey, any> | null | undefined =
  undefined;
export function useRouteStates<T extends Record<any, any>>(obj: T) {
  const [state, setState] = useState<T>(obj);

  useLayoutEffect(() => {
    const handlePopstate = () => {
      const searchParams = new URLSearchParams(window.location.search)
      for (const [key, type] of Object.entries(obj)) {
        const paramValue = type === ArrayParam ? searchParams.getAll(key) : searchParams.get(key);
        setState(prev => {
          return {
            ...prev,
            [key]: paramValue
          }
        })
      }
    }
    window.addEventListener('popstate', handlePopstate)
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    }
  }, [])
  const updateState = useCallback((value: Partial<T>) => {
    const url = new URL(window.location.href);
    for (const [key, val] of Object.entries(value)) {
      const type = obj[key];
      if (type !== ArrayParam) {
        if (val === undefined) {
          url.searchParams.delete(key);
        } else {
          url.searchParams.set(key, val);
        }
      } else {
        url.searchParams.delete(key);
        if (val && Array.isArray(val) && val.length > 0) {
          val.forEach(v => {
            url.searchParams.append(key, v);
          })
        }
      }
    }
    window.history.pushState({}, '', url);
    setState(prev => {
      return {
        ...prev,
        ...value
      }
    })
  }, []);
  return [state, updateState] as const;
}

export function useRouteState<T>(key: string, type: T) {
  const [state, setState] = useState<T>(() => {
    // 初始化url上已有的参数， 比如f5刷新
    if (
      ![ArrayParam, StringParam, BooleanParam, NumberParam].includes(
        type as any
      )
    ) {
      return null as T;
    }
    const url = new URL(window.location.href);

    if (type !== ArrayParam) {
      const value = url.searchParams.get(key);
      if (value === null) {
        return type;
      } else {
        return value as any as T;
      }
    } else {
      const value = url.searchParams.getAll(key);
      return value.length ? (value as any as T) : type;
    }
  });
  useLayoutEffect(() => {
    /**
     * 浏览器导航返回时，对状态进行还原上一步
     */
    const handlePopstate = () => {
      const searchParams = new URLSearchParams(window.location.search)
      const paramValue = type === ArrayParam ? searchParams.getAll(key) : searchParams.get(key);
      /**
       * TODO 这里不知道为啥渲染两次，把多余的if掉
       */
      if (paramValue === state) {
        setState(paramValue as T);
      }
    }
    window.addEventListener('popstate', handlePopstate)
    return () => {
      window.removeEventListener('popstate', handlePopstate);
    }

  }, [])

  const updateState = useCallback((value: T) => {
    /**
     * 这个钩子仅仅支持这两个类型的赋值，object请使用useRouterStates
     * 更加复杂请移入其他方案
     */
    if (
      ![ArrayParam, StringParam, BooleanParam, NumberParam].includes(
        type as any
      )
    ) {
      console.error('a invalid type is passed');

      return;
    }
    const url = new URL(window.location.href);

    if (type !== ArrayParam) {
      /**
        *  基础类型
        */
      if ([undefined, null, '', Infinity].includes(value as any)) {
        url.searchParams.delete(key);
        window.history.pushState({}, '', url);
      } else {
        url.searchParams.set(key, value as string);
        window.history.pushState({}, '', url);
      }
    } else {
      /**
       * 数组类型
       */

      url.searchParams.delete(key);
      if (value && Array.isArray(value) && value.length > 0) {
        value.forEach(v => {
          url.searchParams.append(key, v);
        })
      }

      window.history.pushState({}, '', url);
    }
    setState(value);
  }, []);

  return [state, updateState] as const;
}
