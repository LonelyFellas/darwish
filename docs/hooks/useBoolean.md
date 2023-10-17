# useBoolean

**useBoolean**是对boolean值进行切换

```jsx
import { useBoolean } from 'darwish';

export default () => {
  const [on, toggle] = useBoolean(true);

  return (
    <div>
      <div>{on ? 'ON' : 'OFF'}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};
```
