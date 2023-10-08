import {
  Children,
  Fragment,
  createElement,
  type FC,
  type PropsWithChildren,
  type ReactElement,
} from 'react';

export function Switch(
  props: PropsWithChildren<{ strict?: boolean }>,
): JSX.Element;
export function Switch(props: PropsWithChildren<SwitchProps>): JSX.Element;
export default function Switch(props: PropsWithChildren<SwitchProps>) {
  const { children, strict = true, label, ...restProps } = props;
  const matchChild: ReactElement[] = [];
  Children.forEach(
    Children.toArray(children) as ReactElement<PropsWithChildren<CaseProps>>[],
    (child) => {
      if (
        (strict === true &&
          child.type === Case &&
          child.props.condition === true) ||
        child.type === Default
      ) {
        matchChild.push(child);
      } else if (strict === false) {
        if (
          (child.type === Case && child.props.condition === true) ||
          child.type != Case
        ) {
          matchChild.push(child);
        }
      }
    },
  );
  return createElement(
    label || Fragment,
    restProps === undefined ? {} : { ...restProps },
    matchChild,
  );
}

interface CaseProps {
  condition?: boolean;
}
const Case: FC<PropsWithChildren<{ condition?: boolean }>> = ({ children }) =>
  <>{children}</>;
const Default: FC<PropsWithChildren<{}>> = ({ children }) => <>{children}</>;; 
