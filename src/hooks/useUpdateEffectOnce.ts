import { useRef } from 'react';
import useUpdateEffect from './useUpdateEffect';

/**
 * @description 让useUpdateEffect只执行一次
 * @param effect 回调函数
 * @param condition 执行条件
 */
function useUpdateEffectOnce(effect: React.EffectCallback, condition = true) {
  const flag = useRef(condition);
  const once = useRef(true);

  useUpdateEffect(() => {
    if (condition && once.current) {
      flag.current = true;
      once.current = false;
    }
    if (flag.current) {
      effect();
      flag.current = false;
    }
    return () => {
      flag.current = false;
    };
  }, [condition]);
}
export default useUpdateEffectOnce;
