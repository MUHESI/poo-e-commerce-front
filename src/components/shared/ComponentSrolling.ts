import styled from "styled-components";

export const ContentScrollable = styled.div`
  height: ${(props: { hideBgColor: boolean; height: number }) =>
    `${props.height}px`};
  overflow: hidden;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: transparent;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: rgba(0, 0, 0, 0.05);
      background-color: ${(props) => `${props.hideBgColor && "transparent"}`};
    }
  }
`;
