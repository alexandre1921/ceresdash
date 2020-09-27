import React from 'react';
import {
  Title,
  SearchBox,
  TableOptions,
  SelectTitle,
  SelectButton,
  SelectList,
  SelectOption,
  Arrow,
  SendButton,
} from './styles';
import arrow from '../../assets/arrow.svg';

const UserList: React.FC = () => {
  const selects = [
    { title: 'Rede Social', options: ['Instagram', 'Facebook'] },
    { title: 'Filtros', options: ['Opc 1', 'Opc 2', 'Opc 3'] },
  ];

  return (
    <>
      <Title>Lista de usuários</Title>
      <TableOptions>
        <div>
          <SearchBox placeholder="Buscar" />
        </div>
        {selects.map((value, index) => (
          <div>
            <SelectButton href="#">
              <>
                <SelectTitle>
                  <p>{value.title}</p>
                  <Arrow src={arrow} alt="arrow" />
                </SelectTitle>
              </>
              <SelectList>
                {value.options.map(option => (
                  <SelectOption href="#">{option}</SelectOption>
                ))}
              </SelectList>
            </SelectButton>
          </div>
        ))}
        <div>
          <SendButton disabled>Enviar mensagem</SendButton>
        </div>
      </TableOptions>
    </>
  );
};

export default UserList;
