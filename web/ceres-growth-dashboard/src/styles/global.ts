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
    -webkit-font-smoothing: antialiased;
  }
  
  #intem1 {
    margin: 0 auto;
    top: 4.42%;
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
    top: 6.42%;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;

    color: #FFFFFF;
  }

  #logo {
    position: absolute;
    left: 25.9%;
    right: 87.68%;
    top: 4.42%;
    bottom: 87.12%;

    
    border: 1px solid #15594D;
    box-sizing: border-box;
  }

  #menuReports{
    left: 15.9%;
    top: 4.42%;
  }
`;
