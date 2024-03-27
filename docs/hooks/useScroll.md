# useScroll

```jsx
import { useRef } from 'react';
import { useScroll } from 'darwish';
export default () => {
  const scrollRef = React.useRef(null);
  const { x, y } = useScroll(scrollRef);

  return (
    <div>
      <div>x: {x}, y: {y}</div>
      <div style={{ height: '400px', width: '400px', overflow: 'hidden', background: 'gray' }}>
        <div ref={scrollRef} style={{ height: '1200px', width: '1200px', overflow: 'auto' }}></div>
      </div>
    </div>
  );
};
```
