import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 1026px;
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 45px;
`;

export const Title = styled.h1`
  height: 39px;
  left: 331px;
  top: 45px;
  margin-bottom: 51px;

  font-style: normal;
  font-weight: medium;
  font-size: 32px;
  color: #0d4137;
`;

export const TableOptions = styled.div`
  padding-bottom: 27px;
  & div + div {
    padding-left: 26px;
  }
`;

export const Box = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  padding-right: 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const Magnifier = styled.img`
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const SearchBox = styled.input`
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

export const Select = styled.div`
  width: 100%;
  height: 47px;
  font-weight: 600;
  padding-left: 12px;
  background: #ffffff;
  border-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  option {
    padding-left: 12px;
    max-height: 47px;
    max-width: 147px;
    border-style: none;

    &:first-child {
      display: none;
    }
  }
`;

export const SelectTitle = styled.p`
  display: flex;
  font-size: 13px;
  p {
    font-weight: 600;
    padding-top: 15px;
    padding-left: 16px;
    padding-bottom: 7px;
    max-width: 85%;
    flex: 1;
  }
  & img {
    padding-top: 20px;
  }
`;

export const SelectButton = styled.a`
  height: 47px;
  width: 100%;
  display: inline-block;
  text-decoration: none;
  color: #262121;
  background: #ffffff;
  border-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transition: background 0.4s ease;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  & svg {
    margin-top: 20px;
  }

  &:active,
  &:focus {
    & {
      transition: background 0.2s ease;
      background: #d3d3d3;
    }
    & div {
      display: block;
    }
    & svg {
      transform: rotate(180deg);
    }
  }

  &:not(:focus) {
    & div {
      display: none;
    }
  }
`;

export const SelectList = styled.div`
  position: fixed;
  min-width: 121px;
  height: 47px;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15));
`;

export const SelectOption = styled.a`
  display: block;
  font-weight: 600;
  text-decoration: none;
  color: #262121;
  padding-top: 18px;
  padding-bottom: 17px;
  padding-left: 12px;
  background: #ffffff;
  border-style: none;
  transition: background 0.4s ease;
  &:hover {
    background: #f0f0f0;
    transition: background 0.2s ease;
  }
  &:first-child {
    border-radius: 5px 5px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 5px 5px;
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

export const TableComponent = styled.table`
  svg {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
  border-spacing: 0px;
  width: 100%;
  th {
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    height: 46px;
    max-height: 46px;
  }
  td {
    height: 46px;
    max-height: 46px;
    min-width: 124px;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  tbody,
  thead {
    td:first-child {
      float: left;
      min-width: 83px;
    }
    td:last-child {
      float: right;
      min-width: 100px;
    }
  }
`;

export const Thead = styled.thead`
  background: #0d4137;
  text-align: left;
  th:first-child {
    * {
      fill: #ffffff;
    }
    button {
      margin: 0;
    }
    border: none;
    width: 10px;
    padding-top: 3px;
    padding-left: 31px;
    border-top-left-radius: 5px;
  }
  th:last-child {
    text-align: right;
    padding-right: 27px;
    border-top-right-radius: 5px;
  }
`;

export const Tbody = styled.tbody`
  background: #ffffff;
  td:first-child {
    padding-top: 13px;
  }
  td:last-child {
    padding-top: 13px;
    button {
      position: block;
      &:active,
      &:focus {
        * {
          display: block;
        }
      }
    }
  }
  tr:nth-child(odd) {
    background: #f0f0f0;
  }
`;

export const ActionsMenu = styled.div`
  margin-top: -10px;
  display: none;
  z-index: 1;
  width: 160px;
  height: 64px;
  position: fixed;
  background: white;
  right: 29px;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.2));
  border-radius: 5px;
  transition: background 0.2s ease;
  & div {
    &:hover {
      transition: background 0.2s ease;
      background: #f0f0f0;
    }
    & button {
      height: 32px;
      font-family: 'Montserrat';
      -webkit-font-smoothing: antialiased;
      font-weight: 800;
      font-size: 15px;
      line-height: 20px;
      color: #262121;
    }
  }
  & div:first-child {
    border-radius: 5px 5px 0px 0px;
  }
  & div + div {
    border-top: 1px solid #f0f0f0;
    border-radius: 0px 0px 5px 5px;
  }
`;

export const Tfoot = styled.tfoot`
  background: #0d4137;
  td:first-child {
    border-bottom-left-radius: 5px;
  }
  td:last-child {
    border-bottom-right-radius: 5px;
  }
  td {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    empty-cells: show;
  }
`;
export const Footer = styled.div`
  display: flex;
  float: right;
  margin-top: 3px;
  & svg {
    margin-left: 19px;
    cursor: pointer;
    transform: rotate(90deg);
    margin-top: 0px;
    fill: white;
    height: 18px;
    width: 18px;
    * {
      fill: white;
    }
  }
  & svg + svg {
    margin-left: 25px;
    margin-right: 38px;
    cursor: pointer;
    transform: rotate(270deg);
    margin-top: 0px;
    fill: white;
    height: 18px;
    width: 18px;
  }
`;
export const FooterText = styled.p`
  font-size: 16px;
  font-weight: 700;
`;
export const SearchBoxDiv = styled.div`
  width: 100%;
`;
export const SelectDiv = styled.div`
  min-width: 147px;
`;
export const SendButtonDiv = styled.div`
  min-width: 173px;
`;
