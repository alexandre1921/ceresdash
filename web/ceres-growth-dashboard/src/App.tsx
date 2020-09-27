import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { Grid, MD2, MD10 } from './styles/app';
import Menu from './pages/header';

const App: React.FC = () => (
  <>
    <Grid>
      <MD2>
        <Menu />
      </MD2>
      <MD10>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MD10>
    </Grid>
    <GlobalStyle />
  </>
);

export default App;
