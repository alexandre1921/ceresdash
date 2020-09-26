import styled from 'styled-components';

export const Title = styled.h1`
  /* Lista de usuários */

  position: absolute;
  width: 294px;
  height: 39px;
  left: 331px;
  top: 45px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: medium;
  font-size: 32px;

  /* identical to box height */

  color: #0d4137;
`;

export const SearchBox = styled.input`
  /* Lista de usuários */

  position: absolute;
  width: 480px;
  height: 47px;
  left: 331px;
  top: 120px;

  padding-left: 12px;

  background: #ffffff;
  border-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  &::placeholder {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #929090;
  }
`;

export const Select = styled.div`
  /* Lista de usuários */

  position: absolute;
  width: 147px;
  height: 47px;
  left: 831px;
  top: 120px;

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

  position: absolute;
  width: 147px;
  height: 47px;
  left: 831px;
  top: 120px;

  display: block;
  text-decoration: none;
  color: #262121;
  padding-top: 15px;
  padding-left: 16px;
  background: #ffffff;
  border-style: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  transition: all 0.4s ease;

  &:hover {
    & {
      transition: all 0.2s ease;
      background: #d3d3d3;
    }
    & div {
      display: block;
    }
  }
`;

export const SelectList = styled.div`
  position: absolute;
  width: 147px;
  height: 47px;
  left: 0px;
  top: 41px;
  display: none;
`;

export const SelectOption = styled.a`
  display: block;
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
