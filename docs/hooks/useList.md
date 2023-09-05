# useList

对数组类型的状态进行高度管理

```jsx
import { useList } from 'darwish';
export default () => {
  const [list, { set }] = useList([1, 2, 3]);

  console.log(list);
  return (
    <div>
      <h1>list: {list.toString()}</h1>
      <button onClick={() => set([2, 3, 4])}>set to [2, 3, 4]</button>
    </div>
  );
};
```
