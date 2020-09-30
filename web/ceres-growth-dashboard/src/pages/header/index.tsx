import React from 'react';

import GlobalStyle from '../../styles/global';
import { ReactComponent as IconeList } from '../../images/list.svg';
import { ReactComponent as IconeReports } from '../../images/reports.svg';
import { ReactComponent as LogoCeres } from '../../images/logoCeres.svg';
import { MenuHeader, Menu, Items, Title } from './styles';

const lick1 = 'ativo';
const lick2 = 'inativo';

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
