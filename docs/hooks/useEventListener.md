# useEventListener

进一步的处理了addEventListener

## 基础用法

```jsx
import React, { useState, useRef, useEffect } from 'react';
import { useEventListener } from 'darwish';

export default () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  useEventListener(ref, 'click', () => {
    setValue((prev) => prev + 1);
  });

  return (
    <button ref={ref} type="button">
      You click {value} times
    </button>
  );
};
```

## 监听keydown事件

```jsx
import React, { useState } from 'react';
import { useEventListener } from 'darwish';

export default () => {
  const [value, setValue] = useState('');

  useEventListener(window, 'keydown', (ev) => {
    setValue(ev.code);
  });

  return <p>Your press key is {value}</p>;
};
```
