import { isFunction, useSetState } from 'darwish';
import type { Options } from 'darwish/hooks/useRequest';
import { useCallback } from 'react';

type States<T> = {
  data: T;
  loading: boolean;
  error: any;
};
type DataStats<T> = States<T>['data'];
export default function useFetch({
  service,
  options,
}: {
  service: (params: any) => Promise<any>;
  options: Required<Options>;
}) {
  const { defaultData, refreshDeps, onFinally, onSuccess, onBefore, onError } =
    options;
  const [states, setStates] = useSetState<States<any>>({
    data: defaultData,
    loading: false,
    error: null,
  });

  const run = useCallback((runParams: any) => {
    setStates({ loading: true });
    onBefore();
    service(runParams)
      .then((res) => {
        onSuccess(res);
        setStates({ data: res });
      })
      .catch((err) => {
        onError(err);
        setStates({ data: defaultData, error: err });
      })
      .finally(() => {
        onFinally();
        setStates({ loading: false });
      });
  }, refreshDeps);
  const mutate = (
    data: DataStats<any> | ((prev: DataStats<any>) => DataStats<any>),
  ) => setStates({ data: isFunction(data) ? data(states.data) : data });

  return {
    run,
    mutate,
    ...states,
  };
}
