"use client";

import React, { createContext, useContext, useState } from "react";
import { links } from "@/lib/data";
import type { ActiveSection } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: ActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<ActiveSection>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<ActiveSection>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export default ActiveSectionContextProvider;

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === undefined || context === null)
    throw new Error(
      "useActiveSection must me used within an ActiveSectionContextProvider"
    );

  return context;
};
