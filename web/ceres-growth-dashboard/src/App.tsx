import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { Grid, Row, ColMenu, ColRoutes } from './styles/grid';
import Menu from './pages/header';
import Modal from './components/Modal';

const App: React.FC = () => (
  <>
    <Modal />
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

export default App;
