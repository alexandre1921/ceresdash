import React from 'react';
import { Title, Menu, Items } from './styles';
import GlobalStyle from '../../styles/global';
import iconeList from '../../assets/list.svg';
import iconeReports from '../../assets/reports.svg';
import logoCeres from '../../assets/logoCeres.svg';

const Header: React.FC = () => {
  return (
    <>
      <Menu>
        <img id="logo" src={logoCeres} alt="Logo" />
        <Title>Ceres Dashboard</Title>
        <Items>
          <img id="menuReports" src={iconeReports} alt="Lista de usuários" />
          <a href="/" id="intem1">
            Relatórios
          </a>
          <div>
            <img id="menuList" src={iconeList} alt="Relatórios" />
            <a href="/list" id="item2">
              Lista de Usuário
            </a>
          </div>
        </Items>
      </Menu>
      <GlobalStyle />
    </>
  );
};

export default Header;
