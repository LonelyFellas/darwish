# usePrevious

保存上一次状态的 Hook。

注意：⚠️初始值的上一个值是 undefined

```jsx
import { usePrevious } from 'darwish';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  console.log(previous);
  return (
    <>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: 8 }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        increase
      </button>
      <button
        type="button"
        style={{ marginLeft: 8 }}
        onClick={() => setCount((c) => c - 1)}
      >
        decrease
      </button>
    </>
  );
};
```
