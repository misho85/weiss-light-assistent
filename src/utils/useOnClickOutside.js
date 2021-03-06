import { useCallback, useEffect } from 'react';

const useOnClickOutside = (ref, handler, active = true) => {
  const listener = useCallback(
    e => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(e);
      }
    },
    [ref, handler]
  );

  useEffect(() => {
    if (active) {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    } else {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    }

    return () => {
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
    };
  }, [listener, active]);
};

export default useOnClickOutside;
