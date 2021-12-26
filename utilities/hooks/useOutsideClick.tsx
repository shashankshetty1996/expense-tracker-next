import { MutableRefObject, useCallback, useEffect } from 'react';

function useOutsideClick(
  elemRef: MutableRefObject<HTMLElement>,
  closeHandler: (isVisible: boolean, event: Event) => void,
  isVisible: boolean = true
) {
  const handler = useCallback(
    $event => {
      if (elemRef.current && !elemRef.current.contains($event.target)) {
        closeHandler(isVisible, $event);
      }
    },
    [closeHandler, isVisible]
  );

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handler);
    }
    return () => {
      document.removeEventListener('click', handler);
    };
  }, [isVisible, handler]);
}

export default useOutsideClick;
