import { useRecoilValue } from "recoil";
import { FlashMessage, ProcessBar } from "./components";
import { flashMessageAtom } from "../atom";

export default function FlashMessageContainer() {
  const flashMessageState = useRecoilValue(flashMessageAtom);
  return (
    <FlashMessage>
      <div className={`box ${flashMessageState.isActive ? undefined : "hide"}`}>
        {flashMessageState ? flashMessageState.content : null}
        <ProcessBar
          className={flashMessageState.isActive ? "start" : undefined}
        />
      </div>
    </FlashMessage>
  );
}
