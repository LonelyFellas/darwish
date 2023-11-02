# useScroll

```jsx
import { useRef } from 'react';
import { useScroll } from 'darwish';
export default () => {
  const scrollRef = React.useRef(null);
  const [{ x, y }, scrolling] = useScroll(scrollRef);

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
      <div
        ref={scrollRef}
        style={{ height: '400px', overflowY: 'auto', background: 'gray' }}
      >
        <div style={{ height: '1200px', width: '400px' }}></div>
      </div>
    </div>
  );
};
```
