# IteratorViews

用于迭代器的Views

```jsx
import { IteratorViews } from 'darwish';

export default () => {
  return (
    <div>
      <IteratorViews items={3}>
        <div>Hello world</div>
      </IteratorViews>
      <IteratorViews items={['a', 'b', 'c']} label="ul">
        {(item, index) => {
          console.log(item, index);
          return <li>i am a {item}</li>;
        }}
      </IteratorViews>
      <IteratorViews items={[1, 2, 3]} label="ol">
        <li>I am a banana</li>
      </IteratorViews>
    </div>
  );
};
```
