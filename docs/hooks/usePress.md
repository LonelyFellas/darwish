# usePress

左键 键位按压

```jsx
import { useState } from 'react';
import { usePress } from 'darwish';

export default () => {
  const [pressCount, setPressCount] = useState(0);
  const element = (
    <button>
      <h1>Count: {pressCount}</h1>
    </button>
  );
  const PressView = usePress(element, () => {
    setPressCount((prev) => prev + 1);
  });
  return (
    <div>
      <PressView />
    </div>
  );
};
```
