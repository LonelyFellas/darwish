import useStorage from "."
export default function useLocalStorage(key: string) {
  const StorageStateAction  = useStorage('localStorage', key)
  return StorageStateAction;
}

