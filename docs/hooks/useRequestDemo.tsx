import { useRequest } from 'darwish';

const getData = (params: any) => {
  return fetch('https://dev-l03bmzvvrojybo0.api.raw-labs.com/mock/json-api')
    .then((res) => res.json())
    .then((res) => res);
};
const useRequestDemo = (url: string) => {
  const { run, data} = useRequest(getData, {
    defaultData: [],
    manual: true,
    onSuccess: (res) => {
      console.log(res, 'onSuccess');
    },
  });

  console.log(data);

  return <h1>Hello World</h1>;
};
export default useRequestDemo;
