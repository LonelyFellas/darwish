# useKey

监听键盘的某一个键位(内部使用了useLayoutEffect钩子)，从而触发一个回调

```jsx
import { useState } from 'react';
import { useKey } from 'darwish';
export default () => {
  const [count, setCount] = useState(1);

  const counter = (type) => () => {
    setCount((prev) => prev + (type === 'increment' ? 1 : -1));
  };
  useKey('ArrowUp', counter('increment'));
  useKey('ArrowDown', counter('decrement'));
  useKey('ArrowLeft', counter('increment'));
  useKey('ArrowRight', counter('decrement'));
  return (
    <div>
      <h1>Count: {count}</h1>
      <p>Enter up and Enter left ++</p>
      <p>Enter down and Enter right --</p>
    </div>
  );
};
```

```jsx
import { useRef } from 'react';
import { useKey, isBlanks } from 'darwish';
export default () => {
  const ref = useRef();
  const search = () => {
    if (ref.current && isBlanks(ref.current.value.trim())) {
      alert('输入的内容不能为空');
      ref.current.value = '';
    } else {
      alert('search');
    }
  };
  useKey('Enter', search);
  return (
    <div>
      <input ref={ref} />
      <p>Enter 'arrow enter' to search data</p>
    </div>
  );
};
```
