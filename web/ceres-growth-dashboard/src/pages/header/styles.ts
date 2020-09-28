import styled from 'styled-components';

export const Menu = styled.div`
  position: absolute;
  width: 251.72px;
  height: 100%;
  left: -0.86px;
  top: 0px;

  background: #15594d;
`;

export const Items = styled.div`
  position: absolute;
  height: 120.83px;
  left: -0.38;
  top: 220.37px;
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
  position: absolute;
  width: 180.23px;
  height: 24.17px;
  left: 33.37px;
  top: 149.02px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  /* identical to box height */
`;

export const menu1 = styled.button`
  position: absolute;
  width: 251.72px;
  height: 60.41px;
  left: -0.86px;
  top: 260.78px;

  background: #0d4137;
`;
