import useStorage from ".";
export default function useSessionStorage(key: string) {
  const StorageStateAction  = useStorage('sessionStorage', key)
  return StorageStateAction; 
}
