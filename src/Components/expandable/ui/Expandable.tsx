import { type Dispatch, type SetStateAction, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ExpandableContextProvider } from "../context/ExpandableContext";
import { useExpandableListContext } from "../context/ExpandableListContext";
import { useExpand } from "../hooks/useExpand";
import { useRegister } from "../hooks/useRegister";
import type { ExpandableAxle, ExpandableId } from "../types";

type ExpandableProps = {
  children: React.ReactNode;
  id?: ExpandableId;
  expanded?: boolean;
  setExpanded?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  axle?: ExpandableAxle;
};

export const Expandable: React.FC<ExpandableProps> = ({
  children,
  id,
  expanded: externalOpen,
  setExpanded: setExpernalOpen,
  className,
  axle = "vertical",
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

  return (
    <ExpandableContextProvider
      value={{
        isCurrentExpanded,
        toggleCurrentExpanded,
        triggerRef,
        contentRef,
        isInsideContext: true,
        axle,
      }}
    >
      <div className={twMerge(
        "relative",
        axle === "horisontal" && "flex h-full items-center",
        className
      )}>{children}</div>
    </ExpandableContextProvider>
  );
};
