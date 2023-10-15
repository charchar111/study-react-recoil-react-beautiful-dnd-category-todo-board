export interface IDragableCard {
  elementTitle: string;
  elementIndex: number;
  elementId: number;
  elementSelected: boolean;
  boardId: string;
}

export interface ITodoElement {
  id: number;
  title: string;
  content: string;
  selected: boolean;
}

export interface ITodoAtom {
  [key: string]: ITodoElement[];
}

export interface IDropBoard {
  boardId: string;
}

export interface IBoard {
  $isDraggingOver: boolean;
  $draggingOverWith: string | null | undefined;
  $draggingFromThisWith: string | null | undefined;
}

export interface ITodoForm {
  title: string;
  content: string;
}

export interface IFlashMessageAtom {
  isActive: boolean;
  type: "error" | "info";
  content: string;
}
