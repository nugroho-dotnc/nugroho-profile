import React, { createContext, useContext, useState } from "react";

export const ExpertType = Object.freeze(
    {
        UIUX: "UIUX",
        FRONTEND:  "FE",
        MOBILE: "MOBILE",
        ALL: "ALL"
    }
)
export const ExpertTypeList = [
    {
      title: "All Project",
      expert: ExpertType.ALL
    },
    {
      title: "UI/UX",
      expert: ExpertType.UIUX
    },
    {
      title: "Front End",
      expert: ExpertType.FRONTEND
    },
    {
      title: "Mobile Dev",
      expert: ExpertType.MOBILE
    },
    
]

interface ExpertiseContextType {
  expertiseContext: string;
  setExpertiseContext: React.Dispatch<React.SetStateAction<string>>;
}

const ExpertiseContext = createContext<ExpertiseContextType | undefined>(undefined);

interface ExpertiseProviderProps {
  children: React.ReactNode;
}

export const ExpertiseProvider: React.FC<ExpertiseProviderProps> = ({ children }) => {
  const [expertiseContext, setExpertiseContext] = useState<string>(ExpertType.FRONTEND);

  return (
    <ExpertiseContext.Provider value={{ expertiseContext, setExpertiseContext }}>
      {children}
    </ExpertiseContext.Provider>
  );
};

export const useExpertise = (): ExpertiseContextType => {
  const context = useContext(ExpertiseContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};