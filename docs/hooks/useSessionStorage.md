# useSessionStorage

浏览器 Session 储存的增删改的操作，进行了多层封装

```jsx
import { useSessionStorage } from 'darwish';
export default () => {
  const [storage, setStorage, removeStorage] = useSessionStorage('darwish');

  return (
    <div>
      <h1>Session-Storage:{storage}</h1>
      <button
        onClick={() => {
          setStorage(new Date().getTime());
        }}
      >
        update
      </button>
      <button
        onClick={() => {
          removeStorage();
        }}
      >
        remove
      </button>
      <button
        onClick={() => {
          window.sessionStorage.setItem('darwish', new Date().getTime());
        }}
      >
        dd update
      </button>
    </div>
  );
};
```
