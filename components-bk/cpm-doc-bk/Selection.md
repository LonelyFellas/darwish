# Selection

做条件判断的一个组件，看个人喜好需不需要这个组件的必要

```jsx
import { Selection } from 'darwish';
import { useState } from 'react';

export default () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <button onClick={() => setState((prev) => !prev)}>Toggle </button>
      <Selection
        condition={state}
        onTrue={<h1>i am true</h1>}
        onFalse={<h1> i am false </h1>}
      />
    </div>
  );
};
```
