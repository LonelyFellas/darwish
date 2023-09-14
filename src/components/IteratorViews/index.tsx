import { Fragment, createElement } from 'react';

export function IteratorViews(props: {
  items: any[] | number;
  children?: JSX.Element | ((item: any, index: number) => JSX.Element) | null;
}): JSX.Element;
export function IteratorViews(props: IteratorViewsProps): JSX.Element;
/**
 *
 * @param param0
 * @returns
 */
export default function IteratorViews(props: IteratorViewsProps) {
  const { items, children, label, ...restProps } = props;
  return createElement(
    label || Fragment,
    restProps === undefined ? {} : { ...restProps },
    typeof items === 'number'
      ? Array.from({ length: items }, (v, i) => (
          <Fragment key={i}>
            {typeof children === 'function' ? children(v, i) : children}
          </Fragment>
        ))
      : items.map((item, index) => (
          <Fragment key={index}>
            {typeof children === 'function' ? children(item, index) : children}
          </Fragment>
        )),
  );
}
