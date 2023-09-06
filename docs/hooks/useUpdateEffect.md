# useUpdateEffect

这个钩子 忽略首次更新，只通过依赖进行更新，这个钩子才会走，即使依赖是为空的情况下，也是不会走，非常实用和常用。

除了首次不会更新之外，其余的功能和 useEffect 功能是一模一样的。实现原理也是非常的简单(有兴趣可能看我的源码)

```jsx
import { useState, useEffect } from 'react';
import { useUpdateEffect } from 'darwish';
export default () => {
  const [countObj, setCountObj] = useState({
    effect: 0,
    updateEffect: 0,
  });
  const [state, setState] = useState(1);
  useEffect(() => {
    setCountObj((prev) => {
      return {
        ...prev,
        effect: prev.effect + 1,
      };
    });
  }, [state]);
  useUpdateEffect(() => {
    setCountObj((prev) => {
      return {
        ...prev,
        updateEffect: prev.updateEffect + 1,
      };
    });
  }, [state]);
  return (
    <div>
      <h1>effectCount: {countObj.effect}</h1>
      <h1>updateEffectCount: {countObj.updateEffect}</h1>
      <button onClick={() => setState((prev) => prev + 1)}>rerender</button>
    </div>
  );
};
```
