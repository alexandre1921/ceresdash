import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #FDE8DD;
    font-family: 'Montserrat';
    -webkit-font-smoothing: antialiased;
  }
`;

export const Wrapper = styled.div`
  margin-left: 80px;
  margin-right: 80px;
  margin-top: 45px;
`;

export const Title = styled.h1`
  height: 39px;
  left: 331px;
  top: 45px;
  margin-bottom: 51px;

  font-style: normal;
  font-weight: medium;
  font-size: 32px;
  color: #0d4137;
`;
