import { createContext, use } from "react";

type ExpandableContextType = {
  isCurrentExpanded: boolean;
  toggleCurrentExpanded: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
  isInsideContext: boolean;
};

const ExpandableContext = createContext<ExpandableContextType>({
  isCurrentExpanded: false,
  toggleCurrentExpanded: () => {},
  triggerRef: { current: null },
  contentRef: { current: null },
  isInsideContext: false,
});

export const useExpandableContext = () => use(ExpandableContext);

type ExpandableContextProviderProps = {
  children: React.ReactNode;
  value: ExpandableContextType;
};

export const ExpandableContextProvider: React.FC<
  ExpandableContextProviderProps
> = ({ children, value }) => {
  return <ExpandableContext value={value}>{children}</ExpandableContext>;
};
