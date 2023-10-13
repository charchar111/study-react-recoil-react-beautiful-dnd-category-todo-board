import { type } from "os";
import { atom } from "recoil";

export const todoAtom = atom<string[]>({
  key: "todoState",
  default: ["a", "b", "c", "d"],
});
