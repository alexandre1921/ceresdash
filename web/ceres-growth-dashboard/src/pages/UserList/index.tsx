import React from 'react';
import { Title, SearchBox, TableOptions } from './styles';
import SelectList from './Select';

const UserList: React.FC = () => (
  <>
    <Title>Lista de usuários</Title>
    <TableOptions>
      <div>
        <SearchBox placeholder="Buscar" />
      </div>
      <div>
        <SelectList />
      </div>
    </TableOptions>
  </>
);

export default UserList;
