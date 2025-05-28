import {
  type Dispatch,
  type SetStateAction,
  createContext,
  use,
  useEffect,
  useRef,
  useState,
} from "react";
import type { ExpandableId } from "../types";
import { useExpandableListContext } from "./ExpandableList";

type ExpandableContextType = {
  isCurrentExpanded: boolean;
  toggleCurrentExpanded: () => void;
  isInsideContext: boolean;
};

const ExpandableContext = createContext<ExpandableContextType>({
  isCurrentExpanded: false,
  toggleCurrentExpanded: () => {},
  isInsideContext: false,
});

export const useExpandableContext = () => use(ExpandableContext);

type ExpandableProps = {
  children: React.ReactNode;
  id?: ExpandableId;
  expanded?: boolean;
  setExpanded?: Dispatch<SetStateAction<boolean>>;
};

export const Expandable: React.FC<ExpandableProps> = ({
  children,
  id,
  expanded: externalOpen,
  setExpanded: setExpernalOpen,
}) => {
  const { expandedId, setExpanded, registerId, unregisterId, isInsideContext } =
    useExpandableListContext();
  const [internalOpen, setInternalOpen] = useState(false);
  const initialRender = useRef(true);

  if (isInsideContext && id == null)
    throw new Error(
      "If you use 'Expandable' inside 'ExpandableList', pass the 'id' prop",
    );

  useEffect(() => {
    if (!isInsideContext || !id) return;

    if (initialRender.current) {
      registerId(id);
      initialRender.current = false;
    }

   return () => {
     unregisterId(id)
   }

  }, [id, isInsideContext, registerId, unregisterId]);

  const isControlled =
    externalOpen !== undefined && setExpernalOpen !== undefined;
  const isContextControlled = isInsideContext;

  const isCurrentExpanded = isControlled
    ? externalOpen
    : isContextControlled
      ? expandedId === id
      : internalOpen;

  const toggleCurrentExpanded = () => {
    if (isControlled) {
      setExpernalOpen((prev) => !prev);
    } else if (isInsideContext && id !== undefined) {
      setExpanded(id);
    } else {
      setInternalOpen((prev) => !prev);
    }
  };

  return (
    <ExpandableContext.Provider
      value={{
        isCurrentExpanded,
        toggleCurrentExpanded,
        isInsideContext: true,
      }}
    >
      {children}
    </ExpandableContext.Provider>
  );
};
