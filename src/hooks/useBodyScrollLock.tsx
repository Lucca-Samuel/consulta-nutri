import { useEffect } from "react";

function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Limpeza ao desmontar o componente
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLocked]);
}

export default useBodyScrollLock;
