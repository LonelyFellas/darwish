export declare global {
  type EmptyObj = Record<EmptyObj, never>;
  type AnyObj = Record<PropertyKey, any>;
}
