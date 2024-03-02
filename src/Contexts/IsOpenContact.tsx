"use client";
import { createContext, useContext, useState, ReactNode } from "react";
interface IsOpenContactType {
  IsOpenContact: boolean;
  setIsOpenContact:  (isOpen: boolean) => void;
}
const IsOpenContactContext = createContext<IsOpenContactType | undefined>(
  undefined
);

export const IsOpenContactProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [IsOpenContact, setIsOpenContact] = useState<boolean>(false);
  return (
    <IsOpenContactContext.Provider value={{ IsOpenContact, setIsOpenContact }}>
      {children}
    </IsOpenContactContext.Provider>
  );
};

export const useIsOpenContact = () => {
  const context = useContext(IsOpenContactContext);
  if (!context) {
    throw new Error(
      "useIsOpenContact must be used within a IsOpenContactProvider"
    );
  }
  return context;
};
