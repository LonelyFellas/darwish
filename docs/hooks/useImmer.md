# useImmer

解决一个State 复杂多层赋值问题

```jsx
import { useImmer } from 'darwish';
export default () => {
  const [person, setPerson] = useImmer({
    name: 'darwish',
    d: {
      b: {
        info: {
          age: 25,
        },
      },
    },
  });
  return (
    <div>
      <button
        onClick={() => {
          setPerson((draft) => {
            draft.d.b.info.age++;
          });
        }}
      >
        change info
      </button>
      <h1>Age: {person.d.b.info.age}</h1>
    </div>
  );
};
```
