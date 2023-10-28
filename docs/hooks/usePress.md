# usePress

**useBoolean**是对boolean值进行切换

```jsx
import { useState } from "react";
import { usePress } from 'darwish';

export default () => {
  const [pressCount, setPressCount] = useState(0);
  const element = <h1>Count: {pressCount}</h1>
  const PressView = usePress(element, () => {
    setPressCount(prev => prev + 1);
  });
  return (
    <div>
      <PressView />
    </div>
  );
};
```
