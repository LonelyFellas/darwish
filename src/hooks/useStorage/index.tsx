import { useState } from "react";

type Storage = 'sessionStorage' | 'localStorage';
export default function useStorage(type: Storage, key: string) {
  const [storage, setStorage] = useState(() => {
    if (typeof window === 'undefined') return (null as any)
    try {
      return JSON.parse(window[type].getItem(key) || '')
    } catch {
      return window[type as Storage].getItem(key) || ''
    }
  })

  const updateStorage = (value: unknown) => {
    window[type].setItem(key, JSON.stringify(value));
    setStorage(value);
  }

  const removeStorage = () => {
    window[type].removeItem(key);
    storage && setStorage(null);
  }


  return [storage, updateStorage, removeStorage] as const;
}
