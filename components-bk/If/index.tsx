import type { FC, PropsWithChildren, ReactElement } from 'react';

const If: FC<
  PropsWithChildren<{ condition: boolean; render?: () => JSX.Element }>
> = ({ condition, children, render }) =>
  condition ? <>{render ? render() : (children as ReactElement)}</> : <></>;

export default If;
