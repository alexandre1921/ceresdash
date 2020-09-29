import styled from 'styled-components';

export const Title = styled.h1`
  /* Lista de usuários */

  position: absolute;
  width: 294px;
  height: 39px;
  left: 331px;
  top: 45px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;

  /* identical to box height */

  color: #0d4137;
`;

export const Grafico = styled.div`
  /* Lista de usuários */

  position: absolute;
  width: 979px;
  height: 109px;
  left: 298px;
  top: 463px;
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
  margin-left: 51px;
  margin-top: 20px;
`;

export const Followers = styled.div`
  position: absolute;
  width: 374px;
  height: 289px;
  left: 893px;
  top: 109px;
  background: #ffffff;

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
    font-size: 25px;
    line-height: 30px;
  }

  #BodyFollowers {
    position: absolute;
    display: flex;
    margin-left: 20px;
    margin-top: 5px;
  }

  footer {
    margin-top: 170px;
    background: #0d4137;
    height: 67px;
    color: #ffffff;
    display: grid;

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
      width: 30px;
      border-radius: 50%;

      margin-left: 10px;
    }

    p {
      background: #5285d0;
      height: 30px;
      width: 30px;
      border-radius: 50%;

      margin-left: 15px;
    }
  }
  #FacebookNumber {
    background: #5285d0;
    height: 160px;
    width: 160px;
    border-radius: 50%;
    p {
      text-align: center;
      margin-top: 39%;

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
    height: 160px;
    width: 160px;
    border-radius: 50%;
    margin-left: 15px;
    p {
      text-align: center;
      margin-top: 39%;

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

export const HeaderSegments = styled.div`
  position: absolute;
  width: 979px;
  height: 109px;
  left: 298px;
  top: 413px;
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
`;

export const NewFollowers = styled.div`
  margin-top: 109px;
  margin-left: 51px;
  width: 374px;
  height: 289px;
`;
