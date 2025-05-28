import { useExpandableContext } from "./Expandable";

export type ExpandableTriggerProps = {
  children: React.ReactNode;
};

export const ExpandableTrigger: React.FC<ExpandableTriggerProps> = ({
  children,
}) => {
  const { toggleCurrentExpanded } = useExpandableContext();

  return (
    <button onClick={toggleCurrentExpanded} type="submit">
      {children}
    </button>
  );
};
