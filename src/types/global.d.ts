declare global {
  /**
   * @deprecated
   */
  interface IteratorViewsProps
    extends Omit<
      React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>,
      'children'
    > {
    items: any[] | number;
    children?: JSX.Element | ((item: any, index: number) => JSX.Element) | null;
    label?: Darwish.ElementLabel;
  }
  /**
   * @deprecated
   */
  interface SwitchProps
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    strict?: boolean;
    label?: keyof JSX.IntrinsicElements;
  }
  /**
   * @deprecated
   */
  interface HighlightedTextProps {
    text?: string;
    keywords?: string;
    color?: string;
  }
}
export as namespace Darwish;
export = Darwish;
export declare module '*.css';
export declare module '*.module.css';
