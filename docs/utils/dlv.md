# dlv
Get value from object by path.
```ts
import { dlv } from "darwish"
export default () => {
  const obj = {
    undef: undefined,
    zero: 0,
    one: 1,
    n: null,
    f: false,
    a: {
      two: 2,
      b: {
        three: 3,
        c: {
          four: 4
        }
      }
    }
  };

  // support two modes
  // 1. dlv(obj, "a.b.c.four") => 4
  // 2. dlv(obj, ["a", "b", "c", "four"]) => 4
  
  // ok, let me show you
  
  // top-level property
  console.log(dlv(obj, "undef")); // undefined
  console.log(dlv(obj, "zero")); // 0
  console.log(dlv(obj, "one")); // 1
  console.log(dlv(obj, "n")); // null
  console.log(dlv(obj, "f")); // false
  console.log(dlv(obj, ['undef'])); // undefined
  console.log(dlv(obj, ['zero'])); // 0
  console.log(dlv(obj, ['one'])); // 1
  console.log(dlv(obj, ['n'])); // null
  console.log(dlv(obj, ['f'])); // false
  
  // nested property
  console.log(dlv(obj, "a.two")); // 2
  console.log(dlv(obj, "a.b.three")); // 3
  console.log(dlv(obj, "a.b.c.four")); // 4
  console.log(dlv(obj, ["a", "two"])); // 2
  console.log(dlv(obj, ["a", "b", "three"])); // 3
  
  // not exist property
  console.log(dlv(obj, "a.b.c.five")); // undefined
  console.log(dlv(obj, ["a", "b", "c", "five"])); // undefined
  
  // not exist property with default value
  console.log(dlv(obj, "a.b.c.five", 5)); // 5
  console.log(dlv(obj, ["a", "b", "c", "five"], 5)); // 5
  
  // not exist property with default function
  console.log(dlv(obj, "a.b.c.five", () => 5)); // 5
  console.log(dlv(obj, ["a", "b", "c", "five"], () => 5)); // 5
  
  // not exist property with default function and context
  console.log(dlv(obj, "a.b.c.five", function() { return this.a.two }, obj)); // 2
  console.log(dlv(obj, ["a", "b", "c", "five"], function() { return this.a.two }, obj)); // 2
}
```
