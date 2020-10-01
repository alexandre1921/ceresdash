import styled from 'styled-components';

export const ModalComponent = styled.div`
  margin-top: 100px;
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
    & button {
      background: none;
      border: none;
    }
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
  display: flex;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: inherit;
  background: #0d4137;
  height: 45px;
  & div:first-child {
    margin-left: 32px;
    min-width: 40%;
    & p {
      text-align: left;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #ffffff;
    }
  }
  & div:last-child {
    margin-right: 128px;
    width: 26px;
    min-width: 26px;
    & button {
      cursor: pointer;
      background: none;
      border: none;
      background: #ffffff;
      border-radius: 5px;
      width: 126px;
      height: 34px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 22px;
      transition: background 0.2s ease;
    }
    & button:active {
      transition: background 0.2s ease;
      background: #d3d3d3;
    }
  }
`;

export const ModalBody = styled.div`
  & div {
    max-width: 100%;
    height: 560px;
    text-align: left;
    background: #f0f0f0;
  }
  div:nth-child(odd) {
    background: #ffffff;
  }
`;
export const Textarea = styled.textarea`
  resize: none;
  border: none;
  width: 99.96%;
  min-width: 99.96%;
  max-width: 99.96%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  writing-mode: vertical-rl;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
`;
