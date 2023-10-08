# useLocalStorage

浏览器 Local 储存的增删改的操作，进行了多层封装

```jsx
import { useLocalStorage } from "darwish";
export default () => {
  const [storage, setStorage, removeStorage] = useLocalStorage('darwish');

  console.log(storage);
  return <div>
    <h1>Local-Storage: {storage}</h1>
    <button onClick={() => {
      setStorage(new Date().getTime())
    }}>update </button>
    <button onClick={() => {
      removeStorage()
    }}>remove</button>
  </div>
}
```

