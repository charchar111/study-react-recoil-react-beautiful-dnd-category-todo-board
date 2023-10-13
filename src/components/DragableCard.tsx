import { Draggable } from "react-beautiful-dnd";
import { IDragableCard } from "../interface";
import React from "react";

function DragableCard({ elementText, elementIndex }: IDragableCard) {
  return (
    <Draggable index={elementIndex} draggableId={elementText}>
      {(magic) => {
        console.log("ss렌더링");
        return (
          <li
            ref={magic.innerRef}
            {...magic.draggableProps}
            {...magic.dragHandleProps}
          >
            {elementText}
          </li>
        );
      }}
    </Draggable>
  );
}

export default React.memo(DragableCard);
