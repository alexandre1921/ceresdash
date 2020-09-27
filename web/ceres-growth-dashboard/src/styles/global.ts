import styled, { createGlobalStyle } from 'styled-components';

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
  
  #intem1 {
    margin: 0 auto;
    width: 50%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;

    color: #FFFFFF;

 
  }

  #item2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;

    color: #FFFFFF;
  }

`;
