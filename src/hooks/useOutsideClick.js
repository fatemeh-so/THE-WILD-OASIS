import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handelClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("click outside");
          handler();
        }
      }
      document.addEventListener("click", handelClick, listenCapturing);
      return () =>
        document.removeEventListener("click", handelClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
