import { createGlobalStyle } from 'styled-components';

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
