import { useEffect, useRef } from "react";

const useOutsideClick = <T extends HTMLElement>(callbackFn: () => void) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) callbackFn();
    };

    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [callbackFn]);

  return ref;
};

export default useOutsideClick;
