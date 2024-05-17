import { useState, useEffect, useRef } from "react";

export const useScrollToTopButton = () => {
  const [isShowScrollButton, setShowScrollButton] = useState(false);
  const mainReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (mainReference.current) {
        const mainTopPosition =
          mainReference.current.getBoundingClientRect().top;
        const mainHeight = mainReference.current.offsetHeight;
        const windowInnerHeight = window.innerHeight;
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const isEndOfPage = mainHeight - windowInnerHeight <= scrollTop;

        setShowScrollButton(mainTopPosition < 0 && !isEndOfPage);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isShowScrollButton, mainReference };
};
