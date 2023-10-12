# useMount

在组件首次渲染时，执行方法。

```jsx
import { useMount, useBoolean } from 'darwish';

const MyComponent = () => {
  useMount(() => {
    console.log('mount');
  });

  return <div>Hello World</div>;
};

export default () => {
  const [state, toggle] = useBoolean(false);

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
