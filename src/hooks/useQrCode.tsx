/* eslint-disable react-hooks/rules-of-hooks */
import type { ElementHTMLProps, ElementRef } from 'darwish';
import QrCode from 'qrcode';
import { useEffect, useRef } from 'react';

export default function useQrCode(url: string) {
  return (props: ElementHTMLProps<'canvas'>) => {
    const ref = useRef<ElementRef<'canvas'>>(null);
    useEffect(() => {
      QrCode.toCanvas(
        ref.current,
        url,
        { errorCorrectionLevel: 'H' },
        (err) => {
          if (err) throw err;
          if (ref.current) {
            ref.current.style.width =
              (props.width ?? ref.current.clientWidth ?? '0') + 'px';
            ref.current.style.height =
              (props.width ?? ref.current.clientHeight ?? '0') + 'px';
          }
        },
      );
    }, [url]);
    return <canvas ref={ref} {...props}></canvas>;
  };
}
