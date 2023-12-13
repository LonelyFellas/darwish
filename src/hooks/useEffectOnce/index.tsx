import { useEffect } from 'react';

/**
 * TODO 文档缺失
 * @description 让useEffect只执行一次
 * @param effect 回调函数
 */
function useEffectOnce(effect: React.EffectCallback) {
  useEffect(effect, []);
}
export default useEffectOnce;
