import { Expandable } from "./Components/expandable/ui/Expandable";
import { ExpandableContent } from "./Components/expandable/ui/ExpandableContent";
import { ExpandableList } from "./Components/expandable/ui/ExpandableList";
import { ExpandableTrigger } from "./Components/expandable/ui/ExpandableTrigger";

function App() {
  return (
      <div>
          <ExpandableList>
              <Expandable id="1">
                <ExpandableContent className="">
                      <div className="p-5 border-[1px] border-red-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                      </div>
                  </ExpandableContent>
                <ExpandableTrigger>
                      <h2 className="p-3 border-[1px] border-black">Expandable</h2>
                  </ExpandableTrigger>
              </Expandable>
              <Expandable id="2">
                  <ExpandableTrigger>
                      <h2 className="p-3 border-[1px] border-black">Expandable</h2>
                  </ExpandableTrigger>
                  <ExpandableContent>
                      <div className="p-5 border-[1px] border-red-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                      </div>
                  </ExpandableContent>
              </Expandable>
              <Expandable id="3">
                  <ExpandableTrigger>
                      <h2 className="p-3 border-[1px] border-black">Expandable</h2>
                  </ExpandableTrigger>
                  <ExpandableContent>
                      <div className="p-5 border-[1px] border-red-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                      </div>
                  </ExpandableContent>
              </Expandable>
              <Expandable id="4">
                  <ExpandableTrigger>
                      <h2 className="p-3 border-[1px] border-black">Expandable</h2>
                  </ExpandableTrigger>
                  <ExpandableContent>
                      <div className="p-5 border-[1px] border-red-400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt ut labore et dolore magna aliqua.
                      </div>
                  </ExpandableContent>
              </Expandable>
          </ExpandableList>
      </div>
  );
}

export default App;
