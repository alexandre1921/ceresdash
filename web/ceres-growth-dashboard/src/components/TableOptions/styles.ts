import styled from 'styled-components';

export const TableOptions = styled.div`
  padding-bottom: 27px;
  & div + div {
    padding-left: 26px;
  }
`;

export const SendButton = styled.button`
  height: 47px;
  width: 100%;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  text-decoration: none;
  color: #262121;
  background: #ffffff;
  border-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  cursor: pointer;
  transition: background 1.5s ease;

  &:active {
    transition: background 0.2s ease;
    background: #d3d3d3;
  }
  &:disabled {
    color: #929090;
    transition: background 0.2s ease;
    background: #f0f0f0;
  }
`;

export const SendButtonDiv = styled.div`
  min-width: 173px;
`;
