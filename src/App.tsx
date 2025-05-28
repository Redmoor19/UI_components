import { useState } from "react";
import { Expandable } from "./Components/expandable/ui/Expandable";
import { ExpandableContent } from "./Components/expandable/ui/ExpandableContent";
import { ExpandableList } from "./Components/expandable/ui/ExpandableList";
import { ExpandableTrigger } from "./Components/expandable/ui/ExpandableTrigger";

function App() {
  const [show, setShow] = useState(true);


  return (
    <ExpandableList>
      <button onClick={() => setShow(prev => !prev)}>Show</button>
      {show && <Expandable id="1">
        <ExpandableTrigger>
          <div>Trigger</div>
        </ExpandableTrigger>
        <ExpandableContent>
          <div>Content</div>
        </ExpandableContent>
      </Expandable>}
      <Expandable id="2">
        <ExpandableTrigger>
          <div>Trigger</div>
        </ExpandableTrigger>
        <ExpandableContent>
          <div>Content</div>
        </ExpandableContent>
      </Expandable>
      <Expandable id="3">
        <ExpandableTrigger>
          <div>Trigger</div>
        </ExpandableTrigger>
        <ExpandableContent>
          <div>Content</div>
        </ExpandableContent>
      </Expandable>
      <Expandable id="4">
        <ExpandableTrigger>
          <div>Trigger</div>
        </ExpandableTrigger>
        <ExpandableContent>
          <div>Content</div>
        </ExpandableContent>
      </Expandable>
    </ExpandableList>
  );
}

export default App;
