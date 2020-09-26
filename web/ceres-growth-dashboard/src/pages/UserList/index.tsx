import React from 'react';
import { Title, SearchBox } from './styles';
import SelectList from './Select';

const UserList: React.FC = () => (
  <>
    <Title>Lista de usuários</Title>
    <>
      <SearchBox placeholder="Buscar" />
      <SelectList />
    </>
  </>
);

export default UserList;
