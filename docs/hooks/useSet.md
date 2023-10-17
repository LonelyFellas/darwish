# useSet

对set集合的数据状态进行管理

```jsx
import { useSet } from 'darwish';

export default () => {
  const [set, { add, has, remove, toggle, reset }] = useSet(new Set(['hello']));

  return (
    <div>
      <button onClick={() => add(String(Date.now()))}>Add</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => remove('hello')} disabled={!has('hello')}>
        Remove 'hello'
      </button>
      <button onClick={() => toggle('hello')}>Toggle hello</button>
      <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
    </div>
  );
};
```
