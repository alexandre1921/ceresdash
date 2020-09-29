import styled from 'styled-components';

export const MenuHeader = styled.div`
  display: block;
  justify-content: center;
  & svg {
    margin-top: 45px;
    margin-left: 71px;
    vertical-align: center;
  }
`;

export const Menu = styled.div`
  position: absolute;
  width: 251.72px;
  height: 100%;
  background: #15594d;
`;

export const Items = styled.div`
  height: 120.83px;
  left: -0.38;
  top: 170.37px;
  background: #ffffff;
  a {
    width: 252px;
    padding: 18px;
    display: block;
    text-decoration: none;
    background: #15594d;

    display: flex;
    align-items: center;
    transition: background 0.3s ease;
    &:hover {
      padding-left: 14px;
      float: right;
      width: 248px;
      background: #0d4137;
      transition: background 0.3s ease;
    }
  }

  img {
    margin-left: 23px;
  }

  div {
    margin-left: 15px;

    strong {
      color: #ffffff;
      font-family: Montserrat;
    }
  }
  hr {
    height: 1px;
    border: none;
    background: #0d4137;
    border-radius: 0px;
  }
`;

export const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 30px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  /* identical to box height */
`;

export const menu1 = styled.button`
  width: 251.72px;
  height: 60.41px;
  left: -0.86px;
  top: 260.78px;

  background: #0d4137;
`;
