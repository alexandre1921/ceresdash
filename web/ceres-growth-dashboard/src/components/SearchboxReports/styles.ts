import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  padding-right: 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  & svg {
    margin-top: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 47px;

  padding-top: 2px;
  padding-right: 6px;
  padding-left: 12px;

  background: #ffffff;
  border-style: none;
  border-radius: 5px;

  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 195px;
    color: #929090;
  }
`;

export const SearchBoxDiv = styled.div`
  width: 35%;
  position: absolute;
  margin-left: 3.3%;
  margin-top: 20px;
`;
