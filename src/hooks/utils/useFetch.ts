import { isFunction, useSetState } from 'darwish';
import type { Options } from 'darwish/hooks/useRequest';
import React, { useCallback } from 'react';

type States<T> = {
  data: T | null;
  loading: boolean;
  error: any;
};
type Flag =
  | 'before'
  | 'useRequest'
  | 'error'
  | 'success'
  | 'finally'
  | 'cancel';
type DataStats<T> = States<T>['data'];
export default function useFetch<TData = null, TParams = null>({
  service,
  options,
}: {
  service: (params: TParams) => Promise<TData>;
  options: Required<Options<TData, TParams>>;
}) {
  const { defaultData, refreshDeps, onFinally, onSuccess, onBefore, onError } =
    options;
  const [states, setStates] = useSetState<States<TData>>({
    data: defaultData,
    loading: false,
    error: null,
  });
  const flag = React.useRef<Flag>('before');

  const run = useCallback(
    (runParams: any) => {
      setStates({ loading: true });
      flag.current = 'useRequest';
      onBefore();
      service(runParams)
        .then((res) => {
          if (flag.current === 'cancel') return;
          onSuccess(res);
          setStates({ data: res });
          flag.current = 'success';
        })
        .catch((err) => {
          if (flag.current === 'cancel') return;
          onError(err);
          setStates({ data: defaultData, error: err });
          flag.current = 'error';
        })
        .finally(() => {
          if (flag.current === 'cancel') return;
          onFinally();
          setStates({ loading: false });
          flag.current = 'finally';
        });
    },
    [states.loading, ...refreshDeps],
  );
  const cancel = () => {
    setStates({ loading: false });
    flag.current = 'cancel';
  };

  const mutate = (
    data: DataStats<TData> | ((prev: DataStats<TData>) => DataStats<TData>),
  ) => setStates({ data: isFunction(data) ? data(states.data) : data });

  return {
    run,
    mutate,
    cancel,
    ...states,
  };
}
