import styled from 'styled-components';

export const ModalComponent = styled.div`
  margin-top: 183px;
  z-index: 1;
  position: absolute;
  width: 100%;
  text-align: center;
  & div {
    margin: auto;
    min-width: 800px;
    max-width: 80%;
  }
`;

export const ModalContent = styled.div`
  display: block;
`;

export const ModalBackground = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  background: white;
  opacity: 0.5;
`;

export const ModalHeader = styled.div`
  display: flex;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: inherit;
  background: #0d4137;
  height: 45px;
  & div:first-child {
    min-width: 90%;
    & p {
      margin-top: 2px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #ffffff;
    }
  }
  & div:last-child {
    margin-top: 9px;
    margin-right: 10px;
    width: 26px;
    min-width: 26px;
    & svg {
      transition: fill 0.2s ease;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      & *:hover {
        transition: fill 0.2s ease;
        fill: #d3d3d3;
      }
    }
  }
`;

export const ModalFooter = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: inherit;
  background: #0d4137;
  height: 45px;
`;

export const ModalBody = styled.div`
  & div {
    max-width: 100%;
    height: 51px;
    text-align: left;
    background: #f0f0f0;
    & p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      color: #000000;
      padding-left: 22px;
      padding-top: 18px;
    }
  }
  div:nth-child(odd) {
    background: #ffffff;
  }
`;
