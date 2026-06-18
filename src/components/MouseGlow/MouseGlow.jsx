import { useEffect } from "react";

function MouseGlow() {

  useEffect(() => {

    const handleMove = (e) => {

      document.documentElement.style.setProperty(
        "--mouse-x",
        `${e.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener(
      "mousemove",
      handleMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMove
      );

  }, []);

  return null;
}

export default MouseGlow;