import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { Grid, Row, ColMd2, ColMd10 } from './styles/grid';
import Menu from './pages/header';

const App: React.FC = () => (
  <>
    <Grid>
      <Row>
        <ColMd2>
          <Menu />
        </ColMd2>
        <ColMd10>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ColMd10>
      </Row>
    </Grid>
    <GlobalStyle />
  </>
);

export default App;
