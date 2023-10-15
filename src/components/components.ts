import styled, { keyframes } from "styled-components";
import { IBoard } from "../interface";

export const FlashMessage = styled.div`
  position: fixed;
  width: 50%;
  color: black;
  /* font-weight: 600; */
  /* letter-spacing: 1px; */
  top: 0;

  div.box {
    background-color: ${(props) => props.theme.bgcolors.secondaryHighContrast};
    /* min-height: 50px; */
    text-align: center;
    padding: 20px;
    opacity: 1;
    transition: all 0.5s ease-in-out;
    &.hide {
      opacity: 0;
    }
  }
`;

const Processing = keyframes`
from{
  transform-origin:left ;
  transform: scaleX(1);
}

to {
  transform-origin:left ;
  transform: scaleX(0);
}

`;

export const ProcessBar = styled.div`
  height: 10px;
  background-color: ${(props) => props.theme.textcolors.surface1};
  margin-top: 10px;
  opacity: 0;

  &.start {
    opacity: 1;
    animation: ${Processing} 2.5s linear 0.3s forwards;
  }
`;

export const Boards = styled.div`
  padding: 20px;
  /* display: flex;

  flex-wrap: wrap;; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, max-content));
  justify-content: center;
`;

export const Card = styled.li<{ $isDragging: boolean }>`
  background-color: ${(props) =>
    props.$isDragging ? props.theme.bgcolors.surface2 : "inherit"};
  border-radius: 10px;
  display: flex;

  align-items: center;

  p {
    width: 90%;
    padding: 10px 15px;
  }

  .card-btn-box {
    display: flex;
    margin-right: 10px;
    button {
      font-size: 25px;
      &:hover {
        color: white;
      }

      &.check-btn {
        font-size: 16px;
        margin-right: 10px;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
`;

export const Title2 = styled.h1`
  font-size: 16px;
  color: ${(props) => props.theme.textcolors.surface1Title};
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const Board = styled.div<IBoard>`
  border: 1px solid ${(props) => props.theme.bordercolor.primary};
  border-radius: 10px;
  width: 30%;
  min-width: 250px;
  padding: 20px 0;
  min-height: 400px;
  margin: 10px;
  background-color: ${(props) =>
    props.$isDraggingOver
      ? props.theme.bgcolors.primary
      : props.$draggingFromThisWith
      ? props.theme.bgcolors.secondary
      : "inherit"};

  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 20px;

    ${Title2} {
      margin-bottom: 0;
      padding: 0;
    }
  }

  ul {
    ${Card} {
    }
  }
`;

export const Modal = styled.aside`
  height: 100vh;
  width: 50%;
  height: 40%;
  position: fixed;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;

    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bgcolors.background};
    opacity: 0.6;
    position: relative;
    z-index: 1;
  }

  form.modal__form {
    width: 100%;
    padding: 0 20px;
    position: absolute;
    /* top: 0;
    bottom: 0; */
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      background-color: ${(props) => props.theme.bgcolors.surface1};
      margin-bottom: 20px;
      border-radius: 10px;
      padding: 20px 10px;
    }

    .input-title {
      position: relative;
      input {
        width: 100%;
      }
      .input-title__category {
        display: block;
        max-width: 80px;
        position: absolute;
        right: 0;
        bottom: 50%;
        transform: translate(-15%, 25%);
        padding: 10px 15px;
        border-radius: 10px;
        background-color: ${(props) => props.theme.bgcolors.primary};
      }
    }

    div.textarea-wrapper {
      display: flex;
      background-color: ${(props) => props.theme.bgcolors.surface1};
      border-radius: 10px;
      margin-bottom: 20px;

      textarea {
        overflow-x: hidden !important;
        display: block;
        width: 95%;
        margin: 0 auto;
        padding: 10px 0;
        max-height: 6.5em;

        &::-webkit-scrollbar {
          width: 10px;
          position: relative;
        }
        &::-webkit-scrollbar-track {
          background-color: ${(props) => props.theme.bgcolors.surface2};
        }
        &::-webkit-scrollbar-thumb {
          background-color: ${(props) => props.theme.scrollbar.thumbcolor};
        }

        &::-webkit-scrollbar-thumb:hover {
          background: rgb(216, 107, 11);
        }
      }
    }

    div.btn-wrapper {
      display: flex;
      justify-content: center;

      button {
        margin: 0 20px;
        padding: 15px;
        border-radius: 50%;
        opacity: 1;
        background-color: ${(props) =>
          props.theme.bgcolors.primaryHighContrast};
        transition: all 0.2s ease-in-out;
        &:hover {
          background-color: ${(props) =>
            props.theme.bgcolors.secondaryHighContrast};
        }
      }
    }
  }
`;

export const ModalAside = styled.aside`
  width: 25%;

  position: absolute;
  right: 0;
  bottom: 0;

  z-index: 2;
  transform: translate(0);
  transition: all 0.5s ease-in-out;
  &.hide {
    transform: translate(100%);
  }
`;

export const CategoryLists = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  li {
    padding: 20px;
    background-color: ${(props) => props.theme.bgcolors.surface2};
    opacity: 0.7;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;
    &:nth-child(2n) {
      background-color: ${(props) => props.theme.bgcolors.surface3};
    }

    &:hover {
      background-color: ${(props) => props.theme.bgcolors.primary};
    }
  }
`;

export const Tab = styled.div`
  margin: 0 10px;
  overflow: hidden;
  border-radius: 50%;
  button {
    background-color: ${(props) => props.theme.bgcolors.primaryHighContrast};
    padding: 20px;

    &.isActive {
      background-color: ${(props) =>
        props.theme.bgcolors.secondaryHighContrast};
    }
  }

  &.drop-delete {
    width: fit-content;
  }
`;

export const Tabs = styled.section`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  justify-content: flex-end;
`;

export const CancelBtn = styled.button`
  position: absolute;
  padding: 10px;
  z-index: 99;
  top: 0%;
  right: 0%;
  font-size: 20px;
`;

export const Contents = styled.div`
  width: 100%;
  padding: 0 20px;
  position: absolute;
  top: 21px;
  bottom: 0;
  z-index: 2;

  h1 {
    border-bottom: 1px solid ${(props) => props.theme.bordercolor.primary};
    padding: 10px 3px;
  }
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
`;

export const ModalEditContainter = styled.aside`
  background-color: ${(props) => props.theme.bgcolors.secondaryHighContrast};
  width: 20%;

  position: fixed;
  bottom: 15%;

  border-radius: 10px;

  .modal__content {
    margin-top: 20px;
    padding: 10px;
    display: flex;

    justify-content: space-around;
    align-items: center;
    text-align: center;

    button {
      font-size: 30px;
      margin-bottom: 20px;
      padding: 0 10px;
    }
  }
`;

export const BoardForAdd = styled.div`
  border: 1px dashed ${(props) => props.theme.bordercolor.primary};
  border-radius: 10px;
  width: 30%;
  min-width: 250px;

  min-height: 400px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  cursor: pointer;

  i {
    font-size: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 80%;

      margin-top: 20px;
      transition: background-color 0.2s ease-in-out;
      border-bottom: 1px solid ${(props) => props.theme.bordercolor.primary};
      padding: 3px 0;

      &:hover {
        background-color: ${(props) => props.theme.bgcolors.surface2};
      }
    }
  }
`;
