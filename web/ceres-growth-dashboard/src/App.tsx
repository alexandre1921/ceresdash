import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { Grid, Row, ColMenu, ColRoutes } from './styles/grid';
import Menu from './pages/header';

const App: React.FC = () => {
  return (
    <>
      <Grid>
        <Row>
          <ColMenu>
            <Menu />
          </ColMenu>
          <ColRoutes>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </ColRoutes>
        </Row>
      </Grid>
      <GlobalStyle />
    </>
  );
};

export default App;
