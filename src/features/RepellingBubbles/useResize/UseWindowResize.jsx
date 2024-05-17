/* eslint-disable eslint-comments/disable-enable-pair -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable eslint-comments/require-description -- брал свой код из nextjs лень переписывать с типами итд */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-undef */

import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined,
  });

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    let timeoutId;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return windowSize;
};
