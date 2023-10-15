import { Draggable } from "react-beautiful-dnd";
import { IDragableCard } from "../interface";
import React from "react";
import { Card } from "./components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  renderCardDetailAtom,
  renderEditTodoAtom,
  todoAtom,
  todoGetbyIdSelector,
} from "../atom";

function DragableCard({
  elementTitle,
  elementIndex,
  elementId,
  elementSelected,
  boardId,
}: IDragableCard) {
  const renderEditTodoState = useRecoilValue(renderEditTodoAtom);
  const setRenderCardDetailState = useSetRecoilState(renderCardDetailAtom);
  const todoSelectorGetbyId = useSetRecoilState(todoGetbyIdSelector);

  const setTodoState = useSetRecoilState(todoAtom);

  const handleCheckCard = () =>
    setTodoState((current) => {
      const copyTargetArr = [...current[boardId]];
      const targetIndex = copyTargetArr.findIndex(
        (element) => element.id === elementId
      );

      const copyTarget = { ...copyTargetArr[targetIndex] };

      copyTarget.selected = !copyTarget.selected;
      copyTargetArr.splice(targetIndex, 1, copyTarget);

      return { ...current, [boardId]: copyTargetArr };
    });

  const handleDeleteCard = () =>
    setTodoState((current) => {
      const copyTargetArr = [...current[boardId]];
      const targetIndex = copyTargetArr.findIndex(
        (element) => element.id === elementId
      );
      copyTargetArr.splice(targetIndex, 1);

      return { ...current, [boardId]: copyTargetArr };
    });

  return (
    <Draggable index={elementIndex} draggableId={elementTitle}>
      {(magic, snapshot) => (
        <Card
          ref={magic.innerRef}
          {...magic.draggableProps}
          {...magic.dragHandleProps}
          $isDragging={snapshot.isDragging}
          className="card"
        >
          <p
            onClick={() => {
              setRenderCardDetailState((current) => !current);
              todoSelectorGetbyId(elementId);
            }}
          >
            {elementTitle}
          </p>
          {renderEditTodoState ? (
            <div className="card-btn-box">
              <button className="check-btn" onClick={handleCheckCard}>
                {elementSelected ? (
                  <i className="fa-solid fa-circle-check"></i>
                ) : (
                  <i className="fa-regular fa-circle"></i>
                )}
              </button>
              <button className="delete-btn" onClick={handleDeleteCard}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          ) : null}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragableCard);
