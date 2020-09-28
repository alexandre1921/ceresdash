import React from 'react';

import GlobalStyle from '../../styles/global';
import iconeList from '../../assets/list.svg';
import iconeReports from '../../assets/reports.svg';
import logoCeres from '../../assets/logoCeres.svg';

import { Menu, Items, Title } from './styles';

const lick1 = 'ativo';
const lick2 = 'ativo';

const Header: React.FC = () => {
  return (
    <>
      <Menu>
        <div>
          <img id="logo" src={logoCeres} alt="Logo" />
          <Title>Ceres Dashboard</Title>
        </div>
        <Items>
          <hr />
          <div />
          <a href="/" id="intem1" className={lick1}>
            <img src={iconeReports} alt="Relatórios" />
            <div>
              <strong>Relatórios</strong>
            </div>
          </a>
          <div />
          <a href="/list" id="item2" className={lick2}>
            <img src={iconeList} alt="Lista de Usuários" />
            <div>
              <strong>Lista de Usuários</strong>
            </div>
          </a>
        </Items>
      </Menu>
      <GlobalStyle />
    </>
  );
};

export default Header;
