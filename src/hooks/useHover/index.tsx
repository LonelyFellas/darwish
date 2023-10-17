import { cloneElement, useState } from 'react';

export default function useHover(hoveredView: JSX.Element | ((hovered: boolean) => JSX.Element)) {
  const [hovered, setHovered] = useState(false);
  const element = typeof hoveredView === 'function' ? hoveredView(hovered) : hoveredView
  const handleMouseEnter = () => {
    if (element.props && 'onMouseEnter' in element.props) {
      element.props.onMouseEnter();
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (element.props && 'onMouseLeave' in element.props) {
      element.props.onMouseLeave();
    }
    setHovered(false);
  };

  return [
    cloneElement(element, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }),
    hovered,
  ] as const;
}
