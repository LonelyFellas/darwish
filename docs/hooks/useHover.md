# useHover

鼠标经过和离开

```jsx
import { useHover } from 'darwish';

export default () => {
  const element = (hovered) => <div>Hover me! {hovered && 'Thanks!'}</div>;
  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? 'HOVERED' : ''}</div>
    </div>
  );
};
```
