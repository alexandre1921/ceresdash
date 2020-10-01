import styled from 'styled-components';

export const SelectDiv = styled.div`
  min-width: 147px;
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
