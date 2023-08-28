export = Darwish;
export default Darwish;
export as namespace Darwish;
declare namespace Darwish {
  type ElementLabel = keyof JSX.IntrinsicElements;
  type ElementRef<T extends ElementLabel> =
    JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<
      React.HTMLAttributes<unknown>,
      infer A
    >
      ? A
      : never;
  type ElementClickEvent<T extends ElementLabel> = React.MouseEvent<
    ElementRef<T>,
    MouseEvent
  >;
  type ElementChangeEvent<T extends ElementLabel> = React.ChangeEvent<
    ElementRef<T>
  >;
  type IteratorViews = ({
    items,
    children,
    label,
  }: {
    items: any[] | number;
    children?:
      | JSX.Element
      | ((item: any, index: number) => JSX.Element)
      | null
      | undefined;
    label?: keyof JSX.IntrinsicElements | undefined;
  }) => React.ReactElement<
    {
      children?: any;
    },
    string | React.JSXElementConstructor<any>
  >;
  type Selection = ({
    condition,
    onTrue,
    onFalse,
  }: {
    condition: boolean;
    onTrue?: JSX.Element;
    onFalse?: JSX.Element;
  }) => JSX.Element | null;
  type cloneDeep<T> = <T>(data: T) => T;
  type isFilterEmptyString<T> = (obj: T, isFilterEmptyString?: boolean) => T;
  type getQueryParams = (URL: string) => string;
  type isBlanks<T> = (obj: T) => boolean;
  type isBrowser = () => boolean;
  type isEmailValid = (email: string) => boolean;
  type shuffleArray<T> = (arr: T[]) => T[];
  type isObject = (value: unknown) => value is Record<any, any>;
  type isSet = (value: unknown) => value is Set<any>;
  type isMap = (value: unknown) => value is Map<any, any>;
  type isFunction = (value: unknown) => value is Function;
  type isArray = (value: unknown) => value is Array<any>;
  type isString = (value: unknown) => value is string;
  type isNumber = (value: unknown) => value is number;
  type isUndef = (value: unknown) => value is undefined;
}
