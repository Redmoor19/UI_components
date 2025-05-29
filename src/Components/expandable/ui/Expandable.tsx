import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";
import { ExpandableContextProvider } from "../context/ExpandableContext";
import { useExpandableListContext } from "../context/ExpandableListContext";
import { useExpand } from "../hooks/useExpand";
import { useRegister } from "../hooks/useRegister";
import type { ExpandableId } from "../types";

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
  const expandedByContext = expandedId === id;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  if (isInsideContext && id == null)
    throw new Error(
      "If you use 'Expandable' inside 'ExpandableList', pass the 'id' prop",
    );

  id !== undefined &&
    useRegister(isInsideContext, id, registerId, unregisterId);

  const [isCurrentExpanded, toggleCurrentExpanded] = useExpand(
    isInsideContext,
    expandedByContext,
    setExpanded,
    id,
    externalOpen,
    setExpernalOpen,
  );

  useEffect(() => {
    const triggerEl = triggerRef?.current;
    const contentEl = contentRef?.current;

    if (!triggerEl || !contentEl) return;

    if (isCurrentExpanded) {
      const height = contentEl.scrollHeight;
      contentEl.style.height = height + "px";
    } else {
      contentEl.style.height = "0px";
    }
  }, [isCurrentExpanded]);

  return (
    <ExpandableContextProvider
      value={{
        isCurrentExpanded,
        toggleCurrentExpanded,
        triggerRef,
        contentRef,
        isInsideContext: true,
      }}
    >
       <div>
         {children}
       </div>
    </ExpandableContextProvider>
  );
};
