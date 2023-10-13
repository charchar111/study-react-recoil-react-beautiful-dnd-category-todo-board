import styled from "styled-components";

export const Boards = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;
export const Board = styled.div`
  border: 1px solid ${(props) => props.theme.bordercolor.primary};
  border-radius: 10px;
  width: 30%;
  padding: 20px 0;
  min-height: 400px;

  ul {
    li {
      padding: 10px;
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
  padding: 0 10px;
`;
