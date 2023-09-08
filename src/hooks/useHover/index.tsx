import { cloneElement, useState } from 'react';

export default function useHover(hoveredView: JSX.Element) {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    if (hoveredView.props && 'onMouseEnter' in hoveredView.props) {
      hoveredView.props.onMouseEnter();
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (hoveredView.props && 'onMouseLeave' in hoveredView.props) {
      hoveredView.props.onMouseLeave();
    }
    setHovered(false);
  };

  return [
    cloneElement(hoveredView, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    }),
    hovered,
  ] as const;
}
