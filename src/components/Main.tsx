import { DragDropContext, DropResult } from "react-beautiful-dnd";
import MainBoard from "./MainBoard";
import TabsOption from "./Tabs";

import { useSetRecoilState } from "recoil";
import { todoAtom } from "../atom";

import { useState } from "react";

export default function Main() {
  const setTodoState = useSetRecoilState(todoAtom);
  const [isCompleteRendering, setIsCompleteRendering] = useState(false);

  const onDragEnd = function ({
    destination,
    draggableId,
    source,
  }: DropResult) {
    if (!destination) return;
    if (isCompleteRendering) return;

    if (destination.droppableId === source.droppableId) {
      // 동일 보드 내 이동
      setTodoState((current) => {
        const copyArr = [...current[destination.droppableId]];
        const target = copyArr.splice(source.index, 1);

        copyArr.splice(destination.index, 0, ...target);
        return { ...current, [destination.droppableId]: copyArr };
      });
    }

    if (destination.droppableId === "delete") {
      setTodoState((current) => {
        // source에 기반해 타겟 요소의 소속 프로퍼티를 찾고 복사함
        const copyCurrent = { ...current };
        const copyTargetArr = [...copyCurrent[source.droppableId]];

        // 복사한 배열에서 해당 요소를 삭제
        copyTargetArr.splice(source.index, 1);
        // 복사한 배열을 원래 배열과 바꿔치기함
        copyCurrent[source.droppableId] = copyTargetArr;
        return copyCurrent;
      });
      return;
    }

    if (destination.droppableId !== source.droppableId) {
      // 상이한 보드 간 이동
      setTodoState((current) => {
        const destArr = [...current[destination.droppableId]];
        const sourceArr = [...current[source.droppableId]];
        const target = sourceArr.splice(source.index, 1);

        destArr.splice(destination.index, 0, ...target);
        return {
          ...current,
          [destination.droppableId]: destArr,
          [source.droppableId]: sourceArr,
        };
      });
    }

    setIsCompleteRendering(true);
    setTimeout(() => setIsCompleteRendering(false), 700);
  };

  return (
    <main>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainBoard />
        <TabsOption />
      </DragDropContext>
    </main>
  );
}
