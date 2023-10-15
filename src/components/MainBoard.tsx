import { todoAtom } from "../atom";
import { useRecoilValue } from "recoil";

import { Boards } from "./components";
import DropBoard from "./Dropboard";
import AddBoard from "./AddBoard";

export default function MainBoard() {
  const todoState = useRecoilValue(todoAtom);

  return (
    <Boards>
      {Object.keys(todoState).map((objectKey) => (
        <DropBoard key={objectKey} boardId={objectKey} />
      ))}

      <AddBoard />
    </Boards>
  );
}
