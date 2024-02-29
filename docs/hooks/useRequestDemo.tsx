import { useRequest } from 'darwish';
import { useState } from 'react';

function getUsername(obj?: {name: string}): Promise<string> {
  console.log('polling getUsername');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`darwish${Math.random() + 1}`);
    }, 3000);
  });
}

const useRequestDemo = (url: string) => {
  const [count, setCount] = useState(0);
  const { run, data, loading, refresh, mutate, cancel } = useRequest(getUsername, {
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
      <div>{JSON.stringify(data) || 'null'}</div>
      <div onClick={refresh}>
        <button>刷新: {count}</button>
      </div>
      <div>
        <button
          onClick={() =>
            mutate((prev) => {
              return "Hello, World!";
            })
          }
        >
          Change Data
        </button>
      </div>
      <div>
        <button onClick={cancel}>取消</button>
      </div>
    </div>
  );
};
export default useRequestDemo;
