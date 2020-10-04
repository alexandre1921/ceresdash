import styled from 'styled-components';

export const Grafico = styled.div`
  position: absolute;
  width: 75.3%;
  height: 229px;
  margin-left: 3.3%;
  top: 423px;
  background: #ffffff;
  display: grid;

  border: 3px solid #0d4137;
  box-sizing: border-box;
  border-radius: 5px;

  header {
    width: 100%;
    height: 40px;
    left: 298px;
    margin-top: 8px;
    color: #ffffff;
    background: #0d4137;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #ffffff;

    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

export const Box = styled.div`
  display: block;
  display: flex;
  background: #ffffff;
  border-radius: 5px;
  padding-right: 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
`;

export const Magnifier = styled.img``;

export const SearchBox = styled.input`
  /* Lista de usuários */
  width: 100%;
  height: 47px;

  padding-top: 10px;
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
  margin-left: 51px;
  margin-top: 20px;
`;

export const Followers = styled.div`
  position: absolute;
  width: 30%;
  height: 289px;
  margin-left: 48.6%;
  top: 109px;
  background: #ffffff;

  border: 3px solid #0d4137;
  box-sizing: border-box;
  border-radius: 5px;

  header {
    width: 100%;
    height: 37px;
    text-align: center;
    margin-top: 8px;
    background: #0d4137;
    color: #ffffff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
  }

  #BodyFollowers {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: 10px;
    margin-top: 7px;
  }

  footer {
    margin-top: 164px;
    background: #0d4137;
    height: 67px;
    color: #ffffff;
    display: grid;

    #CaptionFollowers {
      width: 100%;
    }

    strong {
      margin-top: 1px;
      text-align: center;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 33px;
      display: flex;
      margin-left: 55%;

      color: #ffffff;

      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    }
    hr {
      background: #e6bb9c;
      height: 30px;
      width: 20%;
      border-radius: 50%;

      margin-left: 10px;
    }

    p {
      background: #5285d0;
      height: 30px;
      width: 20%;
      border-radius: 50%;

      margin-left: 15px;
    }
  }
  #FacebookNumber {
    background: #5285d0;
    height: 53%;
    width: 43%;
    border-radius: 50%;
    margin-left: 10px;
    p {
      text-align: center;
      margin-top: 33%;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 30px;
      line-height: 37px;

      color: #ffffff;
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }

  #InstagramNumber {
    background: #e6bb9c;
    height: 53%;
    width: 43%;
    border-radius: 50%;
    margin-left: 15px;
    p {
      text-align: center;
      margin-top: 33%;

      font-family: Montserrat;
      font-style: normal;
      font-weight: 800;
      font-size: 30px;
      line-height: 37px;

      color: #ffffff;

      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const NewFollowers = styled.div`
  margin-top: 109px;
  margin-left: 4.1%;
  width: 55%;
  height: 289px;
  background: #ffffff;

  border: 3px solid #0d4137;
  box-sizing: border-box;
  border-radius: 5px;

  header {
    height: 80px;
    color: #ffffff;
    background: #0d4137;
    border-top: 8px solid #ffffff;
    display: flex;

    #LeftTexts {
      width: 50%;
      h2 {
        margin-top: 8px;
        margin-left: 10px;
      }
      h3 {
        margin-left: 10px;
      }
    }

    #RightTexts {
      width: 50%;
      margin-top: 6px;
    }

    p {
      margin-left: 43%;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      line-height: 30px;
    }
  }
`;

export const Select = styled.div`
  position: absolute;
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
  position: absolute;
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
  min-width: 261px;
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

export const SelectDiv = styled.div`
  position: absolute;
  display: block;
  width: 20%;
  z-index: 100;
  margin-left: 57%;
  margin-top: 20px;
`;
export const SendButtonDiv = styled.div`
  min-width: 173px;
`;
