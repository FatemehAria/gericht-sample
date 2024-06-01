import { useEffect, useState } from "react";

export const useDynamicCss = () => {
  const [windowWidth, setWindowWidth] = useState<null | number>(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowWidth(window.innerWidth);
      }
      window.addEventListener("resize", handleResize);
    };
    return window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};
