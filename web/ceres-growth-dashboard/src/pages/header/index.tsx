import React from 'react';

import GlobalStyle from '../../styles/global';
import { ReactComponent as IconeList } from '../../assets/list.svg';
import { ReactComponent as IconeReports } from '../../assets/reports.svg';
import { ReactComponent as LogoCeres } from '../../assets/logoCeres.svg';
import { MenuHeader, Menu, Items, Title } from './styles';

const lick1 = 'ativo';
const lick2 = 'ativo';

const Header: React.FC = () => {
  return (
    <>
      <Menu>
        <MenuHeader>
          <LogoCeres />
          <Title>Ceres Dashboard</Title>
        </MenuHeader>
        <Items>
          <hr />
          <a href="/" id="intem1" className={lick1}>
            <IconeReports />
            <div>
              <strong>Relatórios</strong>
            </div>
          </a>
          <div />
          <a href="/list" id="item2" className={lick2}>
            <IconeList />
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
