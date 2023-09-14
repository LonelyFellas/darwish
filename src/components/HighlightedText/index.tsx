import { useMemo, type FC, type PropsWithChildren } from 'react';

const HighlightedText: FC<PropsWithChildren<HighlightedTextProps>> = ({
  text,
  keywords,
  color = '#336699',
  children,
}) => {
  const highlightedText = useMemo(() => {
    let textarea = (children === undefined ? text : children) as
      | string
      | undefined;
    if (textarea !== undefined && typeof textarea === 'string') {
      return textarea.replace(
        new RegExp(keywords || '__^0^__', 'gi'),
        `<span class="highlight" style="color: ${color}" >${keywords}</span>`,
      );
    } else {
      console.error('请设置相关String类型的文本');
      return '';
    }
  }, [keywords, text]);

  return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
};
export default HighlightedText;
