# useDefault

```jsx
import { useDefault } from 'darwish';
export default () => {
  const initialUser = { name: 'Marshall' };
  const defaultUser = { name: 'Mathers' };
  const [user, setUser] = useDefault(defaultUser, initialUser);

  console.log(user);
  return (
    <div>
      <div>User: {user.name}</div>
      <input
        onChange={(e) => setUser({ name: e.target.value })}
        value={user.name}
      />
      <button onClick={() => setUser(null)}>set to null</button>
    </div>
  );
};
```
