import { Draggable, Droppable } from "react-beautiful-dnd";
import { Board, Title2 } from "./components";

import { todoAtom } from "../atom";
import DragableCard from "./DragableCard";
import { IDropBoard } from "../interface";

import { useRecoilState, useRecoilValue } from "recoil";

export default function DropBoard({ boardId }: IDropBoard) {
  const [todoState, setTodoState] = useRecoilState(todoAtom);
  const handleDeleteBoard = function () {
    const check = window.confirm(
      "보드를 삭제하시겠습니까? 보드의 내용들도 전부 삭제됩니다."
    );

    if (check) {
      setTodoState((current) => {
        const copyCurrent = { ...current };
        delete copyCurrent[boardId];

        console.log(copyCurrent);
        return copyCurrent;
      });
    }
  };

  return (
    <Droppable droppableId={boardId}>
      {(magic, snapshot) => {
        return (
          // <Draggable></Draggable>
          <Board
            className="board"
            ref={magic.innerRef}
            {...magic.droppableProps}
            $isDraggingOver={snapshot.isDraggingOver}
            $draggingOverWith={snapshot.draggingOverWith}
            $draggingFromThisWith={snapshot.draggingFromThisWith}
          >
            <div className="title-wrapper">
              <Title2>{boardId}</Title2>
              <button onClick={handleDeleteBoard}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <ul>
              {todoState[boardId].map((element, index) => (
                <DragableCard
                  key={element.id}
                  elementTitle={element.title}
                  elementIndex={index}
                  elementId={element.id}
                  elementSelected={element.selected}
                  boardId={boardId}
                />
              ))}
              {magic.placeholder}
            </ul>
          </Board>
        );
      }}
    </Droppable>
  );
  // return <div>sad</div>;
}
