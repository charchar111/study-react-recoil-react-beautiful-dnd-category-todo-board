import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { CancelBtn, Contents, Modal, Title } from "./components";
import {
  renderCardDetailAtom,
  todoDetailAtom,
  todoGetbyIdSelector,
} from "../atom";

export default function CardDetail() {
  const setRenderCardDetailState = useSetRecoilState(renderCardDetailAtom);
  const todoDetailState = useRecoilValue(todoDetailAtom);

  return (
    <Modal>
      <CancelBtn>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setRenderCardDetailState((current) => !current)}
        ></i>
      </CancelBtn>
      <Contents className="modal__content">
        <Title>{todoDetailState ? todoDetailState.title : null}</Title>
        <p>{todoDetailState ? todoDetailState.content : null}</p>
      </Contents>
    </Modal>
  );
}
