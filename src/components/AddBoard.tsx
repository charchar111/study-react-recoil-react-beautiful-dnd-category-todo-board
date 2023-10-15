import { useForm } from "react-hook-form";
import { BoardForAdd } from "./components";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../atom";

export default function AddBoard() {
  const { register, handleSubmit, setValue } = useForm();
  const setTodoState = useSetRecoilState(todoAtom);

  const onValidAddBoard = function (data: any) {
    const newProperty = data.board;
    console.log(newProperty);
    setTodoState((current) => {
      const copyCurrent = { ...current };
      copyCurrent[newProperty] = [];
      console.log();
      return copyCurrent;
    });
    setValue("board", "");
  };
  return (
    <BoardForAdd>
      <form onSubmit={handleSubmit(onValidAddBoard)}>
        <button>
          <i className="fa-solid fa-plus"></i>
        </button>

        <input
          type="text"
          placeholder="Add Board"
          {...register("board", { required: true })}
        />
      </form>
    </BoardForAdd>
  );
}
