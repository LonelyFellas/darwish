import { isNull } from './is';

// type ToStringOptions = Partial<{
//   null: '';
// }>;
export default function toString(
  value: unknown,
  // options: ToStringOptions = {},
) {
  // const defaultOptions = {
  //   // null: dlv(options, 'null'),
  // };
  if (isNull(value)) {
    return 'null';
  }
}

toString(null);
