import { Expandable } from "./Components/expandable/ui/Expandable";
import { ExpandableContent } from "./Components/expandable/ui/ExpandableContent";
import { ExpandableTrigger } from "./Components/expandable/ui/ExpandableTrigger";

function App() {
  return (
    <div className="h-dvh flex justify-center items-center">
      <Expandable axle="horisontal">
        <ExpandableContent
          className="border border-red-400 p-2 w-96"
        >
          Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non
          orci commodo lobortis. Proin neque massa, cursus ut, gravida ut,
          lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus.
          Nullam tempus. Mauris ac felis vel velit tristique imperdiet. Donec at
          pede. Etiam vel neque nec dui dignissim bibendum. Vivamus id enim.
          Phasellus neque orci, porta a, aliquet quis, semper a, massa.
          Phasellus purus. Pellentesque tristique imperdiet tortor. Nam euismod
          tellus id erat.
        </ExpandableContent>
        <ExpandableTrigger className="px-3">Trigger</ExpandableTrigger>
      </Expandable>
    </div>
  );
}

export default App;
