import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Boards, Title } from "./components/components";
import { useRecoilState } from "recoil";
import { todoAtom } from "./atom";
import { useState } from "react";
import DropBoard from "./components/Dropboard";

function App() {
  const [todoState, setTodoState] = useRecoilState(todoAtom);
  const [isCompleteRendering, setIsCompleteRendering] = useState(false);

  const onDragEnd = function ({
    destination,
    draggableId,
    source,
  }: DropResult) {
    if (!destination) return;
    if (isCompleteRendering) return;

    setTodoState((current) => {
      const newReturn = [...current];
      const target = newReturn.splice(source.index, 1);
      newReturn.splice(destination.index, 0, ...target);
      return newReturn;
    });
    setIsCompleteRendering(true);
    setTimeout(() => setIsCompleteRendering(false), 700);
  };

  return (
    <div className="App">
      {/* <header>
        <Title>TO DO Post It</Title>
      </header>
      <main> */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          <DropBoard />
        </Boards>
      </DragDropContext>
      {/* </main> */}
    </div>
  );
}

export default App;
