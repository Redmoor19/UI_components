import { useExpandableContext } from "./Expandable";

type ExpandableContentProps = {
  children: React.ReactNode;
};

export const ExpandableContent: React.FC<ExpandableContentProps> = ({
  children,
}) => {
  const { isCurrentExpanded, isInsideContext } = useExpandableContext();
  if (!isInsideContext)
    throw new Error("'ExpandableContent' has to be inside 'Expandable'");

  return (
    <div className={`${isCurrentExpanded ? "bg-green-500" : "bg-red-500"} h-5`}>
      {children}
    </div>
  );
};
