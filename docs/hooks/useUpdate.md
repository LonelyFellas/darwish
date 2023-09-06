# useUpdate

重新渲染当前的组件

实现原理其实很简单，就是里面设置了一个另外的状态，通过让这个状态更新一下，让整个组件重新Render一遍

```jsx
import { useRef } from 'react';
import { useUpdate } from 'darwish';

export default () => {
  const bool = useRef(false);
  const update = useUpdate();
  const handleClick = () => {
    bool.current = !bool.current;
    update();
  };
  return (
    <div>
      <h1>i am {bool && bool.current ? 'true' : 'false'}</h1>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};
```
