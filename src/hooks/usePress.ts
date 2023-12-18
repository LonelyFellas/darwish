import { cloneElement, useEffect } from 'react';
import useSetState from './useSetState';

const usePress = (
  pressedView: JSX.Element | (() => JSX.Element),
  callback: () => void,
) => {
  const element =
    typeof pressedView === 'function' ? pressedView() : pressedView;
  const [times, setTimes] = useSetState({
    startTime: -1,
    spendTime: -1,
  });
  const onMouseDown = () => {
    if (element.props && 'onMouseDown' in element.props) {
      element.props.onMouseEnter();
    }
    setTimes({ startTime: new Date().getTime(), spendTime: 0 });
  };

  const onMouseUp = () => {
    if (element.props && 'onMouseUp' in element.props) {
      element.props.onMouseLeave();
    }
    setTimes({
      spendTime: new Date().getTime() - times.startTime,
    });
  };

  useEffect(() => {
    if (times.spendTime >= 250) {
      callback();
    }
  }, [times.spendTime]);
  return () =>
    cloneElement(element, {
      onMouseDown,
      onMouseUp,
    });
};
export default usePress;
