import {useEffect, useState} from "react";
import useFetch from "./utils/useFetch";
/**
 * This hook is used to make requests to the server.
 * It should be used in the components that need to make requests to the server.
 * It should be used in the following way:
 *
 */
export interface Options {
  defaultData?: any;
  manual?: boolean;
  defaultParams?: any[];
  refreshDeps?: React.DependencyList;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onBefore?: () => void;
  onFinally?: () => void;
}
export default function useRequest(requestFn: (obj?: any) => Promise<any>, options: Options) {
  const defaultOptions: Required<Options> = {
    defaultData: options.defaultData || null,
    defaultParams: options.defaultParams || [],
    manual: options.manual || false,
    refreshDeps: options.refreshDeps || [],
    onSuccess: options.onSuccess || (() => {}),
    onError: options.onError || (() => {}),
    onBefore: options.onBefore || (() => {}),
    onFinally: options.onFinally || (() => {}),
  }
  const [count, setCount] = useState(0);
  const { manual, refreshDeps, defaultData, defaultParams } = defaultOptions;


  const { run, data, loading, error, mutate, ...restParams } = useFetch({
    service: requestFn,
    options: defaultOptions,
  });

  useEffect(() => {
    if (!manual) {
      run(defaultParams);
    }
  }, [count, ...refreshDeps])

  const refresh = () => setCount(prev => prev + 1);


  return {
    data,
    run,
    refresh,
    mutate,
    loading,
    error,
    ...restParams,
  };
}
