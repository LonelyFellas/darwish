import React, { Fragment, createElement } from 'react';
type ElementLabel = keyof JSX.IntrinsicElements;

/**
 *
 * @param param0
 * @returns
 */
export default function IteratorViews({
  items,
  children,
  label,
}: {
  items: any[] | number;
  children?: JSX.Element | ((item: any, index: number) => JSX.Element) | null;
  label?: ElementLabel;
}) {
  return createElement(
    label || Fragment,
    {},
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
