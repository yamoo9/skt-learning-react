import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';

export function useMouse(wait = 0) {
  const [x, updateX] = useState(0);
  const [y, updateY] = useState(0);

  useEffect(() => {
    const handleMouseMove = debounce((e) => {
      updateX(e.pageX);
      updateY(e.pageY);
    }, wait);

    globalThis.addEventListener('mousemove', handleMouseMove);
    return () => globalThis.removeEventListener('mousemove', handleMouseMove);
  }, [wait]);

  return { x, y };
}
