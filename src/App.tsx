import { Title } from "./components/components";

import ModalForm from "./components/ModalForm";
import {
  renderCardDetailAtom,
  renderEditTodoAtom,
  renderTodoFormAtom,
} from "./atom";
import { useRecoilValue } from "recoil";
import FlashMessageContainer from "./components/FlashMessage";
import CardDetail from "./components/CardDetail";
import ModalEdit from "./components/ModalEdit";

import Main from "./components/Main";

function App() {
  const renderTodoFormState = useRecoilValue(renderTodoFormAtom);
  const renderCardDetailState = useRecoilValue(renderCardDetailAtom);
  const renderEditTodoState = useRecoilValue(renderEditTodoAtom);

  return (
    <div className="App">
      <FlashMessageContainer />
      <header>
        <Title>TO DO Post It</Title>
      </header>
      <Main />
      {renderCardDetailState ? <CardDetail /> : null}
      {renderTodoFormState ? <ModalForm /> : null}
      {renderEditTodoState ? <ModalEdit /> : null}
    </div>
  );
}

export default App;
