import React from 'react';
import { TableOptions, SendButton, SendButtonDiv } from './styles';
import { Row } from '../../styles/grid';
import SearchBox from '../Searchbox';
import Select from '../Select';

const tableOptions: React.FC = () => {
  const selects = [
    { title: 'Rede Social', options: ['Instagram', 'Facebook'] },
    { title: 'Filtros', options: ['Opc 1', 'Opc 2', 'Opc 3'] },
  ];

  return (
    <TableOptions>
      <Row>
        <SearchBox />
        {selects.map(value => (
          <Select selectInfo={value} />
        ))}
        <SendButtonDiv>
          <SendButton>Enviar mensagem</SendButton>
        </SendButtonDiv>
      </Row>
    </TableOptions>
  );
};
export default tableOptions;
