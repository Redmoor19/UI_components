import { twMerge } from "tailwind-merge";
import { useExpandableContext } from "../context/ExpandableContext";

type ExpandableContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const ExpandableContent: React.FC<ExpandableContentProps> = ({
  children,
  className
}) => {
  const { isInsideContext, contentRef } =
    useExpandableContext();
  if (!isInsideContext)
    throw new Error("'ExpandableContent' has to be inside 'Expandable'");

  return (
    <div
      ref={contentRef}
      className={twMerge(
        "overflow-hidden transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
