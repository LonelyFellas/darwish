# useSessionStorage

浏览器session储存的增删改的操作，进行了多层封装

```jsx
import { useSessionStorage } from "darwish";
export default () => {
  const [storage, setStorage, removeStorage] = useSessionStorage('darwish');



  console.log(storage);
  return <div>
    <h1>Session-Storage:{storage}</h1>
    <button onClick={() => {
      setStorage(new Date().getTime())
    }}>update </button>
    <button onClick={() => {
      removeStorage()
    }}>remove</button>
  </div>
}
```

