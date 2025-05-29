import { twMerge } from "tailwind-merge";
import { useExpandableContext } from "../context/ExpandableContext";

export type ExpandableTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

export const ExpandableTrigger: React.FC<ExpandableTriggerProps> = ({
  children,
  className
}) => {
  const { toggleCurrentExpanded, triggerRef } = useExpandableContext();

  return (
    <button className={twMerge("block w-full", className)} ref={triggerRef} onClick={toggleCurrentExpanded} type="submit">
      {children}
    </button>
  );
};
