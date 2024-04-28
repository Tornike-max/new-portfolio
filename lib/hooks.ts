import { useActiveSection } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ActiveSection } from "./types";

export const useSectionInView = (
  activeSectionName: ActiveSection,
  threshold = 0.7
) => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(activeSectionName);
    }
  }, [activeSectionName, inView, setActiveSection, timeOfLastClick]);

  return { ref, inView };
};
