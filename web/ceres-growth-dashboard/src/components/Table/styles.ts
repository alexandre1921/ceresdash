import styled from 'styled-components';

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
