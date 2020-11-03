import React from 'react';
import { TableOptions, SendButton, SendButtonDiv } from './styles';
import { Row } from '../../styles/grid';
import SearchBox from '../Searchbox';
import Select from '../Select';

const tableOptions: React.FC = () => {
  const selects = [
    {
      key: 'RedesSociais',
      title: <p>Rede Social</p>,
      options: ['Instagram', 'Facebook'],
    },
    {
      key: 'Filtros',
      title: <p>Filtraos</p>,
      options: ['Opc 1', 'Opc 2', 'Opc 3'],
    },
  ];

  return (
    <TableOptions>
      <Row>
        <SearchBox />
        {selects.map(value => (
          <Select selectInfo={value} key={value.key}/>
        ))}
        <SendButtonDiv>
          <SendButton>Enviar mensagem</SendButton>
        </SendButtonDiv>
      </Row>
    </TableOptions>
  );
};
export default tableOptions;
