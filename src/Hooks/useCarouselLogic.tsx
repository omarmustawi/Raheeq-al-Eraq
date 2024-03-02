import { useCallback, useEffect, useState } from "react";

const useCarouselLogic = (initialImage: any, items: any) => {
    const [backgroundImage, setBackgroundImage] = useState(initialImage);
    const [isDisplayLine, setIsDisplayLine] = useState(false);

    const updateBackgroundImage = useCallback((index: number) => {
      setBackgroundImage(items[index]);
      setIsDisplayLine((prev) => !prev);
    }, [items]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const nextIndex = (items.indexOf(backgroundImage) + 1) % items.length;
        updateBackgroundImage(nextIndex);
      }, 5000);
  
      return () => clearInterval(interval);
    }, [backgroundImage, items, updateBackgroundImage]); // Include updateBackgroundImage in the dependency array
  
    return { backgroundImage, isDisplayLine, updateBackgroundImage };
};

export default useCarouselLogic;