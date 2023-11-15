import { Fragment } from 'react';
export default function isReactFragment(child: JSX.Element) {
  try {
    return child.type.toString() === Fragment.toString();
  } catch (e) {
    return false;
  }
}
