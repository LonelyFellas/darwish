import useSetState from "../useSetState"
import { useEffect, useMemo, useState } from "react"

export default function usePress() {
  const [times, setTimes] = useSetState({
    startTime: -1,
    spendTime: -1,
  })
  const onMouseDown = () => {
    setTimes({ startTime: new Date().getTime(), spendTime: 0 })
  }

  const onMouseUp = () => {
    setTimes({
      spendTime: new Date().getTime() - times.startTime,
    })
  }

  useEffect(() => {
    if (times.spendTime >= 250) {
      console.log("ON PRESS");

    }
  }, [times.spendTime])
  return <h1 onMouseDown={onMouseDown} onMouseUp={onMouseUp}>Hello World</h1>
}