import styled from 'styled-components';

export const Title = styled.h1`
  /* Lista de usuários */

  position: absolute;
  width: 294px;
  height: 39px;
  left: 331px;
  top: 45px;

  font-style: normal;
  font-weight: medium;
  font-size: 32px;

  /* identical to box height */

  color: #0d4137;
`;

export const TableOptions = styled.div`
  display: flex;
  position: absolute;
  width: 480px;
  height: 47px;
  left: 331px;
  top: 120px;
  & div + div {
    padding-left: 26px;
  }
`;

export const SearchBox = styled.input`
  /* Lista de usuários */
  width: 480px;
  height: 47px;

  padding-top: 2px;
  padding-left: 12px;

  background: #ffffff;
  border-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
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
  /* Lista de usuários */
  width: 147px;
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

export const SelectButton = styled.a`
  /* Lista de usuários */
  width: 147px;
  height: 47px;

  display: inline-block;
  text-decoration: none;
  color: #262121;
  background: #ffffff;
  border-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transition: all 0.4s ease;

  & p {
    font-weight: 600;
    padding-top: 15px;
    padding-left: 16px;
    padding-bottom: 7px;
  }
  &:active,
  &:focus {
    & {
      transition: all 0.2s ease;
      background: #d3d3d3;
    }
    & div {
      display: block;
    }
    & img {
      padding-left: 0px;
      padding-right: 18px;
      padding-top: 3px;
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
  width: 147px;
  height: 47px;
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
  transition: all 0.2s ease;
  &:hover {
    background: #f0f0f0;
    transition: all 0.2s ease;
  }
  &:first-child {
    border-radius: 5px 5px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 5px 5px;
  }
`;

export const Arrow = styled.img`
  padding-bottom: 2px;
  padding-left: 18px;
  transform: rotate(0deg);
`;
