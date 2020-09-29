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
  

  #logo {
    position: absolute;
    left: 25.9%;
    right: 87.68%;
    top: 20px;
    bottom: 87.12%;

    border: 1px solid #15594D;
    box-sizing: border-box;
  }

  #menuReports{
    left: 10.9%;
    top: 30.42%;
  }

 
`;
