import Darwish, { useSetState } from "darwish";
import { useEffect } from "react";

const useScroll = (ref: React.MutableRefObject<HTMLDivElement>) => {
  const [page, setPage] = useSetState({
    x: 0,
    y: 0
  })
  const onScroll = (event: Darwish.ElementChangeEvent<'div'>) => {
    setPage({
      x: event.target.scrollLeft,
      y: event.target.scrollTop
    })
  }
  Darwish.useEventListener(ref, 'scroll', onScroll)
  useEffect(() => {

    if (ref.current) {
    }
  }, [ref])
  return [page, 3]
}
export default useScroll;