import { Draggable, Droppable } from "react-beautiful-dnd";
import { Board, Title2 } from "./components";
import { useRecoilValue } from "recoil";
import { todoAtom } from "../atom";
import DragableCard from "./DragableCard";

export default function DropBoard() {
  const todoState = useRecoilValue(todoAtom);
  return (
    <Droppable droppableId="board">
      {(magic, snapshot) => {
        return (
          <Board ref={magic.innerRef} {...magic.droppableProps}>
            <Title2>To do</Title2>
            <ul>
              {todoState.map((element, index) => (
                <DragableCard
                  key={element}
                  elementText={element}
                  elementIndex={index}
                />
              ))}
              {magic.placeholder}
            </ul>
          </Board>
        );
      }}
    </Droppable>
  );
}
