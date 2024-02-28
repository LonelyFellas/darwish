import {useState, useRef, useCallback} from 'react';
import {useMount, useCreation} from "darwish";
/**
 * This hook is used to make requests to the server.
 * It should be used in the components that need to make requests to the server.
 * It should be used in the following way:
 *
 */
interface Options {
  defaultData?: any;
  manual?: boolean;
  defaultParams?: any[];
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
  onLoading?: () => void;
  onLoaded?: () => void;
  onFinally?: () => void;
}
export default function useRequest(requestFn: (obj?: any) => Promise<any>, options: Options) {
  const defaultOptions = {
    defaultData: options.defaultData || null,
    defaultParams: options.defaultParams || [],
    manual: options.manual || false,
  }
  const { onSuccess, onError, onLoading, onLoaded, onFinally } = options;
  const { manual, defaultData, defaultParams } = defaultOptions;
  const stateRef = useRef({
    loading: false,
    error: null,
  })
  const [data, setData] = useState(defaultData);

  const request = useCreation(async (runParams?: any) => {
    const params = {};
    if (runParams !== undefined) {
      Object.assign(params, runParams);
    } else {
      const params = {};
      defaultParams.forEach(it => {
        Object.assign(params, it);
      })
    }

    const res = await requestFn();
    return res;
  }, [])

  useMount(() => {
    if (!manual) {
      stateRef.current.loading = true;
      request.then(res => {
        setData(res);
        onSuccess?.(res);
      }).catch(err => {
        stateRef.current.error = err;
        onError?.(err);
      }).finally(() => {
        stateRef.current.loading = false;
        onFinally?.();
      });
    }
  })

  const run = useCallback((params?: any) => {
    // stateRef.current.loading = true;
    // request(params).then(res => {
    //   setData(res);
    //   onSuccess?.(res);
    // }).catch(err => {
    //   stateRef.current.error = err;
    //   onError?.(err);
    // }).finally(() => {
    //   stateRef.current.loading = false;
    //   onFinally?.();
    // });
  }, []);


  return {
    data,
    run,
    loading: stateRef.current.loading,
    error: stateRef.current.error,
  };
}
