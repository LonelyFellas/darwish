import { useEffect, useRef } from "react";
import QrCode from "qrcode";

export default function useQrCode(url: string) {
  return (props: Darwish.ElementHTMLProps<'canvas'>) => {
    const ref = useRef<Darwish.ElementRef<'canvas'>>(null);
    useEffect(() => {
      QrCode.toCanvas(ref.current, url, { errorCorrectionLevel: 'H' }, (err) => {
        if (err) throw err;
        if (ref.current) {
          ref.current.style.width = (props.width ?? ref.current.clientWidth ?? '0') + 'px';
          ref.current.style.height = (props.width ?? ref.current.clientHeight ?? '0') + 'px';
        }
      })
    }, [url])
    return <canvas ref={ref} {...props}></canvas>
  }
}