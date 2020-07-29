import { useState, useEffect, useCallback } from "react";

const useModal = (imageId = null) => {
  const [isShowing, setIsShowing] = useState(false);

  const hide = useCallback(() => {
    setIsShowing(false);
  }, []);

  useEffect(() => {
    if (imageId) {
      setIsShowing(true);
    }
  }, [imageId]);

  return {
    isShowing,
    hide,
  };
};

export default useModal;
