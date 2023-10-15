import {
  categoryAtom,
  flashMessageAtom,
  renderTodoFormAtom,
  todoAtom,
} from "../atom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { CancelBtn, CategoryLists, Modal, ModalAside } from "./components";

import { FieldErrors, useForm } from "react-hook-form";
import { ITodoForm } from "../interface";
import React, { useEffect, useState } from "react";
import autosize from "autosize";

export default function ModalForm() {
  const [todoState, setTodoState] = useRecoilState(todoAtom);

  const [categoryState, setCategoryState] = useRecoilState(categoryAtom);
  const setFlashMessageState = useSetRecoilState(flashMessageAtom);
  const [componentModalAsideHideState, setComponentModalAsideHideState] =
    useState(true);

  const [timeoutIdState, setTimeoutIdState] = useState<NodeJS.Timeout>();
  const setRenderTodoFormState = useSetRecoilState(renderTodoFormAtom);

  const { register, handleSubmit, setValue } = useForm<ITodoForm>();

  useEffect(() => {
    const todoTextarea = document.querySelector(
      "textarea[data-type='todoState-content']"
    );
    if (todoTextarea) autosize(todoTextarea);
  }, []);

  const onValidTodo = function (data: any) {
    setTodoState((current) => {
      // 카테고리 스테이트로 특정 프로퍼티 추출
      const copyArr = [...current[categoryState]];
      // 해당 배열에 splice
      copyArr.unshift({
        id: Date.now(),
        title: data.title,
        content: data.content,
        selected: false,
      });
      // 리턴

      return { ...current, [categoryState]: copyArr };
    });

    setValue("title", "");
    setValue("content", "");
  };

  const onInValidTodo = function (
    data: FieldErrors<{ title?: { type: string; message: string } }>
  ) {
    clearTimeout(timeoutIdState);

    setFlashMessageState((current) => {
      if (data.title?.message) {
        return {
          isActive: true,
          type: "error",
          content: data.title.message as string,
        };
      } else {
        return current;
      }
    });
    const id = setTimeout(() => {
      setFlashMessageState((current) => ({
        ...current,
        isActive: false,
      }));

      setTimeout(
        () =>
          setFlashMessageState((current) => ({
            ...current,
            content: "",
          })),
        500
      );
    }, 3000);
    setTimeoutIdState(id);
  };

  const onClickModalAsideCategoryBtn = function (
    event: React.FormEvent<HTMLButtonElement>
  ) {
    event.preventDefault();
    setComponentModalAsideHideState((current) => !current);
  };

  return (
    <Modal>
      <CancelBtn>
        <i
          className="fa-solid fa-xmark"
          onClick={() => setRenderTodoFormState((current) => !current)}
        ></i>
      </CancelBtn>
      <form
        className="modal__form"
        onSubmit={handleSubmit(onValidTodo, onInValidTodo)}
      >
        <div className="input-title">
          <input
            type="text"
            placeholder="할 일(필수)"
            {...register("title", {
              required: "투 두의 제목은 필수입니다. 해당 부분을 채워주십시오.",
            })}
          />
          <span className="input-title__category">{categoryState}</span>
        </div>

        <div className="textarea-wrapper">
          <textarea
            data-type="todoState-content"
            placeholder="세부 사항(선택)."
            {...register("content")}
          />
        </div>
        <div className="btn-wrapper">
          <button>
            <i className="fa-solid fa-check"></i>
          </button>

          <button
            onClick={onClickModalAsideCategoryBtn}
            data-function="handle__modal-aside"
          >
            <i className="fa-solid fa-tag"></i>
          </button>
        </div>
      </form>

      <ModalAside
        className={`modal-aside ${componentModalAsideHideState ? "hide" : ""}`}
      >
        <CategoryLists>
          {Object.keys(todoState).map((element, index) => (
            <li key={index} onClick={() => setCategoryState(element)}>
              {categoryState === element ? `${element} ◀` : element}
            </li>
          ))}
        </CategoryLists>
      </ModalAside>
    </Modal>
  );
}
