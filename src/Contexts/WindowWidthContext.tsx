// context/WindowWidthContext.tsx
"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface WindowSizeContextProps {
  width: number;
}

const WindowSizeContext = createContext<WindowSizeContextProps | undefined>(
  undefined
);

export const WindowSizeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [width, setWidth] = useState<number>(() => {
    // Use a default value or any logic you prefer for server-side rendering
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Check if `window` is available before attaching the event listener
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <WindowSizeContext.Provider value={{ width }}>
      {children}
    </WindowSizeContext.Provider>
  );
};

export const useWindowSize = (): WindowSizeContextProps => {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error("useWindowSize must be used within a WindowSizeProvider");
  }
  return context;
};
