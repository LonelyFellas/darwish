# useUnmount

在组件首次渲染时，执行方法。

```jsx
import { useUnmount, useBoolean } from 'darwish';

const MyComponent = () => {
  useUnmount(() => {
    console.info('unmount');
  });

  return <p>Hello World!</p>;
};

export default () => {
  const [state, toggle] = useBoolean(true);

  return (
    <>
      <h1>请查看控制台打印信息：</h1>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
    </>
  );
};
```
