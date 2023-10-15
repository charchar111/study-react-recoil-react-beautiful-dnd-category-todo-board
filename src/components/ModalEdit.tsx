import { useSetRecoilState } from "recoil";
import { CancelBtn, ModalEditContainter } from "./components";
import { renderEditTodoAtom, todoAtom } from "../atom";

export default function ModalEdit() {
  const setRenderEditTodoState = useSetRecoilState(renderEditTodoAtom);
  const setTodoState = useSetRecoilState(todoAtom);

  const handleDeSelect = function () {
    setTodoState((current) => {
      // 1. 각 프로퍼티의 배열에서 삭제할 항목을 칮아서 필터링 한다.
      // 원본을 카피한 오브젝트에서 각 배열에 foreach순회를 한다
      // 순회문에서 각 프로퍼티의 배열을 복사한다.
      // 복사한 배열에서 필터로 타겟을 걸러낸다
      const copyCurrent = { ...current };
      Object.keys(copyCurrent).forEach((key) => {
        const copyArr = [...copyCurrent[key]].map((element) => {
          const copyElement = { ...element };
          if (copyElement.selected === true) {
            copyElement.selected = false;
          }
          return copyElement;
        });

        copyCurrent[key] = copyArr;
      });

      return copyCurrent;
    });
  };

  const handleDeleteToSelected = function () {
    setTodoState((current) => {
      // 1. 각 프로퍼티의 배열에서 삭제할 항목을 칮아서 필터링 한다.
      // 원본을 카피한 오브젝트에서 각 배열에 foreach순회를 한다
      // 순회문에서 각 프로퍼티의 배열을 복사한다.
      // 복사한 배열에서 필터로 타겟을 걸러낸다
      const copyCurrent = { ...current };
      Object.keys(copyCurrent).forEach((key) => {
        const filterArr = [...copyCurrent[key]].filter(
          (element) => element.selected === false
        );
        copyCurrent[key] = filterArr;
      });

      return copyCurrent;
    });
  };

  return (
    <ModalEditContainter>
      <CancelBtn>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setRenderEditTodoState((current) => !current)}
        ></i>
      </CancelBtn>
      <div className="modal__content">
        <div className="content__Deselect">
          <button onClick={handleDeSelect}>
            <i className="fa-solid fa-check"></i>
          </button>

          <p>선택 해제</p>
        </div>
        <div className="content__delete">
          <button onClick={handleDeleteToSelected}>
            <i className="fa-regular fa-trash-can"></i>
          </button>

          <p>선택 삭제</p>
        </div>
      </div>
    </ModalEditContainter>
  );
}
