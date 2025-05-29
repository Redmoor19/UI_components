import { twMerge } from "tailwind-merge";
import { useExpandableContext } from "../context/ExpandableContext";

interface ButtonPropsType extends React.ComponentPropsWithoutRef<"button"> {};

interface ExpandableTriggerProps extends ButtonPropsType {
  children: React.ReactNode
}

export const ExpandableTrigger: React.FC<ExpandableTriggerProps> = ({
  children,
  ...props
}) => {
  const { toggleCurrentExpanded, triggerRef } = useExpandableContext();

  return (
      <button
          type="submit"
          className={twMerge("block w-full", props.className)}
          ref={triggerRef}
          onClick={toggleCurrentExpanded}
          {...props}
      >
      {children}
    </button>
  );
};
