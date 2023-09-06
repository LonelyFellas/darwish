# useList

对数组类型的状态进行高度管理

```jsx
import { useList } from 'darwish';
export default () => {
  const [
    list,
    {
      set,
      push,
      updateAt,
      insertAt,
      update,
      updateFirst,
      upsert,
      sort,
      filter,
      removeAt,
      clear,
      reset,
    },
  ] = useList([1, 2, 3]);

  return (
    <div>
      <button onClick={() => set([2, 3, 4])}>set: 将值设置为 [2, 3, 4]</button>
      <button onClick={() => push(new Date().getTime())}>
        push: 从末尾添加一个值
      </button>
      <button onClick={() => updateAt(1, new Date().getTime())}>
        upDateAte: 替换Index:1的值
      </button>
      <button onClick={() => insertAt(1, new Date().getTime())}>
        insertAt: 在index: 1插入一个值
      </button>
      <button onClick={() => update((a, b) => a > b, 2)}>
        update: 所有满足第一个参数的表达式的位置就更新(2)
      </button>
      <button onClick={() => updateFirst((a, b) => a > b, 3)}>
        updateFirst: 第一个满足第一个参数的表达式的位置就更新(3)
      </button>
      <button onClick={() => upsert((a, b) => a > b, 4)}>
        upset: 所有满足第一个参数的表达式的位置就更新(4),不满足就push进去
      </button>
      <button onClick={() => sort((a, b) => a - b)}>
        sort: 自定义排序规则
      </button>
      <button onClick={() => filter((a) => a % 2 === 0)}>filter: 数过滤</button>
      <button onClick={() => removeAt(1)}>removeAt: 移除Index:1的値</button>
      <button onClick={clear}>clear: 清空</button>
      <button onClick={reset}>reset: 重置</button>
      <br />
      <textarea
        style={{
          marginTop: '20px',
          width: '100%',
          height: 100,
          fontSize: 22,
          color: '#336699',
        }}
        disabled
        value={JSON.stringify(list)}
      />
    </div>
  );
};
```
