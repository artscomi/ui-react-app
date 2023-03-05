// Handler when page is scrolled
import { useEffect } from "react";

export const useHandleScroll = (onScroll: (scrollY: number) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      onScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
