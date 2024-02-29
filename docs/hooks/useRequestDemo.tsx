import { useRequest } from 'darwish';
import {useState} from "react";

const getData = (params: any) => {
  return fetch('https://dev-l03bmzvvrojybo0.api.raw-labs.com/mock/json-api')
    .then((res) => res.json())
    .then((res) => res);
};
const useRequestDemo = (url: string) => {
  const [count, setCount] = useState(0);
  const { run, data, loading, refresh, mutate } = useRequest(getData, {
    defaultData: [],
    refreshDeps: [count],
    onSuccess: (res) => {
      console.log(res, 'onSuccess');
    },
  });

  return (
    <div>
      <button onClick={run} disabled={loading}>
        点击
      </button>
      <div>{JSON.stringify(data)}</div>
      <div onClick={refresh}>
        <button>刷新: {count}</button>
      </div>
      <div>
        <button onClick={() => mutate((prev: any) => {
          console.log(prev, 'prev');
          return [1, 2, 3]
        })}>Change Data</button>
      </div>
    </div>
  );
};
export default useRequestDemo;
