import React from 'react';
import { Menu, Items } from './styles';
import { Title } from '../../styles/global';

const Header: React.FC = () => {
  return (
    <>
      <Menu>
        <Title>Ceres Dashboard</Title>
        <Items>
          <a href="/" id="intem1">
            Relatórios
          </a>
          <div id="butoon2">
            <a href="/list" id="item2">
              Lista de Usuário
            </a>
          </div>
        </Items>
      </Menu>
    </>
  );
};

export default Header;
