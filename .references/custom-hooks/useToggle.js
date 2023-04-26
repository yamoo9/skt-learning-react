import { useCallback, useState } from 'react';

export function useToggle(initialToggleState = false) {
  const [toggle, setToggle] = useState(initialToggleState);
  const onToggle = useCallback(() => setToggle(true), []);
  const offToggle = useCallback(() => setToggle(false), []);
  
  return { toggle, onToggle, offToggle };
}
