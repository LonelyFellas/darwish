# useTextSelection

实时获取用户当前选取的文本内容及位置。

```jsx
import React from 'react';
import { useTextSelection } from 'darwish';

export default () => {
  const { text } = useTextSelection();
  return (
    <div>
      <p>You can select text all page.</p>
      <p>Result：{text}</p>
    </div>
  );
};
```
