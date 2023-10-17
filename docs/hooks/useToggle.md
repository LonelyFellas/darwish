# useToggle

**useToggle**是对切换的状态进行管理

```jsx
import { useToggle } from 'darwish';

export default () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle(true);

  return (
    <div>
      <div>{state ? 'ON' : 'OFF'}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => set(true)}>set ON</button>
      <button onClick={setLeft}>setLeft</button>
      <button onClick={setRight}>setRight</button>
    </div>
  );
};
```
