import React, { createContext, useContext, useState } from "react";

interface PageContextType {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

interface PageProviderProps {
  children: React.ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<string>("#home");

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};