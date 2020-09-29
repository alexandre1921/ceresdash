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
  width: 474px;
  height: 89px;
  left: 288px;
  top: 443px;
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
  margin-left: 78px;
  margin-top: 20px;
`;

export const Followers = styled.div`
  position: absolute;
  width: 374px;
  height: 289px;
  left: 893px;
  top: 133px;
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

  footer {
    margin-top: 170px;
    background: #0d4137;
    height: 67px;
    color: #ffffff;
    display: grid;

    strong {
      margin-top: 1px;
      text-align: center;
      display: grid;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 33px;

      color: #ffffff;

      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
    }
  }
  p {
    background: #ffffff;
    height: 30px;
    width: 30px;
    border-radius: 50%;

    margin-left: 20px;
    display: grid;
  }
`;

export const NewFollowers = styled.div``;
