import { Expandable } from "./Components/expandable/ui/Expandable";
import { ExpandableContent } from "./Components/expandable/ui/ExpandableContent";
import { ExpandableList } from "./Components/expandable/ui/ExpandableList";
import { ExpandableTrigger } from "./Components/expandable/ui/ExpandableTrigger";

const items = [
  {
    title: "Introduction",
    description: "The opening section that sets the stage.",
  },
  { title: "Methods", description: "A detailed look at the techniques used." },
  { title: "Results", description: "The outcomes and findings of the study." },
  {
    title: "Discussion",
    description: "An interpretation and analysis of the results.",
  },
  {
    title: "Conclusion",
    description: "A summary of the main points and implications.",
  },
];

function App() {
  return (
    <div className="h-dvh flex flex-col justify-center items-center">
      <ExpandableList>
        {items.map((item) => (
          <Expandable key={item.title} id={item.title}>
            <ExpandableTrigger>{item.title}</ExpandableTrigger>
            <ExpandableContent>{item.description}</ExpandableContent>
          </Expandable>
        ))}
      </ExpandableList>
    </div>
  );
}

export default App;
