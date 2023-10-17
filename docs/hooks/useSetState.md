# useSetState

对Object类型的状态进行管理。

与Class组件的状态管理风格保持一致, 特别是在修改状态的时候，足矣体现出来Class组件修改状态是一样的

```jsx
import { useSetState } from 'darwish';

export default () => {
  const [state, setState] = useSetState({});

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => setState({ hello: 'world' })}>hello</button>
      <button onClick={() => setState({ foo: 'bar' })}>foo</button>
      <button
        onClick={() => {
          setState((prevState) => ({
            count: (prevState.count || 0) + 1,
          }));
        }}
      >
        count
      </button>
    </div>
  );
};
```
