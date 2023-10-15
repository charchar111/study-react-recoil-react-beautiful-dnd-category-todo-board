import { useRecoilState, useSetRecoilState } from "recoil";
import { Tab, Tabs } from "./components";
import { renderEditTodoAtom, renderTodoFormAtom, todoAtom } from "../atom";
import { Draggable, Droppable } from "react-beautiful-dnd";

export default function TabsOption() {
  const setRenderTodoFormState = useSetRecoilState(renderTodoFormAtom);
  const [renderEditTodoState, setRenderEditTodoState] =
    useRecoilState(renderEditTodoAtom);
  const setTodoState = useSetRecoilState(todoAtom);
  const onTodoReset = function () {
    const check = window.confirm(
      "모든 투두 리스트를 삭제하시겠습니까? 이는 되돌릴 수 없습니다."
    );

    if (check) {
      setTodoState((current) => {
        const copyCurrent = { ...current };
        Object.keys(copyCurrent).map((element) => (copyCurrent[element] = []));
        return copyCurrent;
      });
    }
  };

  return (
    <Tabs className="tabs">
      <Tab>
        <button onClick={() => setRenderTodoFormState((current) => !current)}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </Tab>
      <Tab>
        <button
          className={`${renderEditTodoState ? "isActive" : ""}`}
          onClick={() => setRenderEditTodoState((current) => !current)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
      </Tab>
      <Droppable droppableId="delete">
        {(magic) => (
          <Tab
            className="drop-delete"
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            <button>
              <i className="fa-solid fa-trash-can"></i>
            </button>

            {/* {magic.placeholder} */}
          </Tab>
        )}
      </Droppable>

      <Tab>
        <button onClick={onTodoReset}>
          <i className="fa-solid fa-bomb"></i>
        </button>
      </Tab>
    </Tabs>
  );
}
