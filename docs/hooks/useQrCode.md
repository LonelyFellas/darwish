# useQrCode 

对 qrcode 第三方库进一步封装，仅仅使用核心的功能

```jsx
import { useState } from "react";
import { useQrCode } from "darwish"

export default () => {
  const [url, setUrl] = useState('https://www.baidu.com');
  const QrCode = useQrCode(url);

  return (
    <>
      <input placeholder='请输入url' value={url} onChange={(event) => {
        setUrl(event.target.value)
      }} />
      <QrCode style={{ margin: '10px' }} width={200} height={200} />
    </>
  )
}
```