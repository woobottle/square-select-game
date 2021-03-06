import { useRef, useEffect } from "react";

export const useInterval = (callback: () => void, delay: number | null) => {
  const currentCallback = useRef<ReturnType<typeof Function>>();

  useEffect(() => {
    currentCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay !== null) {
      const id = setInterval(() => {
        if (currentCallback.current) currentCallback.current();
      }, 1000);
      return () => clearInterval(id);
    }
  }, [delay]);
};
