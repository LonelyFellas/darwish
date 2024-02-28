# useRafState

`useRafState` is a hook that is used to update the state of a component using `requestAnimationFrame`. It is similar to `useState` but it is more performant.

## Usage

```jsx
import { useRafState, useMount } from 'darwish';

export default () => {
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });

  useMount(() => {
    const onResize = (event) => {
      setState({
        width: event.target.innerWidth,
        height: event.target.innerHeight,
      });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  return <div>
    <h1>Window Size</h1>
    <pre>{JSON.stringify(state, null, 2)}</pre>
  </div>;
};
```
