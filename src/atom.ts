import { atom, selector } from "recoil";
import { IFlashMessageAtom, ITodoAtom, ITodoElement } from "./interface";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: localStorage,
  converter: JSON,
});

export const todoAtom = atom<ITodoAtom>({
  key: "todoState",
  default: {
    "to do": [],
  },
  effects_UNSTABLE: [persistAtom],
});

export const todoDetailAtom = atom<ITodoElement | undefined>({
  key: "todoDetailState",
  default: undefined,
});

export const todoGetbyIdSelector = selector<undefined | number>({
  key: "todoGetbyIdState",
  get: () => undefined,
  set: ({ get, set }, newValId) => {
    const todoState = get(todoAtom);
    const target = Object.keys(todoState)
      .map((objKey) =>
        todoState[objKey].find((element) => element.id === Number(newValId))
      )
      .find((element) => element !== undefined);

    set(todoDetailAtom, target);
  },
});

// export categorySelector = selector()

export const categoryAtom = atom({
  key: "categoryState",
  default: "to do",
});

export const flashMessageAtom = atom<IFlashMessageAtom>({
  key: "flashMessageAtom",
  default: { isActive: false, type: "error", content: "" },
});

export const renderTodoFormAtom = atom({
  key: "renderTodoFormState",
  default: false,
});

export const renderEditTodoAtom = atom({
  key: "renderEditTodoState",
  default: false,
});

export const renderCardDetailAtom = atom({
  key: "renderCardDetailState",
  default: false,
});
