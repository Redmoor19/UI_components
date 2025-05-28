import { createContext, use, useCallback, useState } from "react";
import type { ExpandableId } from "../types";

type ExpandableListContextType = {
  expandedId: ExpandableId | null;
  setExpanded: (id: ExpandableId) => void;
  isInsideContext: boolean;
  registerId: (id: ExpandableId) => void;
  unregisterId: (id: ExpandableId) => void;
};

const ExpandableListContext = createContext<ExpandableListContextType>({
  expandedId: null,
  setExpanded: () => {},
  registerId: () => {},
  unregisterId: () => {},
  isInsideContext: false,
});

export const useExpandableListContext = () => use(ExpandableListContext);

type ExpandableListProps = {
  children: React.ReactNode;
};

export const ExpandableList: React.FC<ExpandableListProps> = ({ children }) => {
  const [expandedId, setExpandedId] = useState<ExpandableId | null>(null);
  const [_, setRegisteredIds] = useState<ExpandableId[]>([]);

  const registerId = useCallback((id: ExpandableId) => {
    setRegisteredIds((prev) => {
      if (prev.includes(id)) throw new Error("All ids should be unique values");
      return [...prev, id];
    });
  }, []);

  const unregisterId = useCallback((id: ExpandableId) => {
    setRegisteredIds((prev) => prev.filter((existedId) => existedId !== id));
  }, []);

  function setExpanded(id: ExpandableId) {
    setExpandedId((prev) => (prev === id ? null : id));
  }

  return (
    <ExpandableListContext.Provider
      value={{
        expandedId,
        setExpanded,
        registerId,
        unregisterId,
        isInsideContext: true,
      }}
    >
      {children}
    </ExpandableListContext.Provider>
  );
};
