import React from 'react';
import {
  TableOptions,
  SelectTitle,
  SelectButton,
  SelectList,
  SelectOption,
  SendButton,
  SelectDiv,
  SendButtonDiv,
} from './styles';
import { Row } from '../../styles/grid';
import SearchBox from '../Searchbox';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

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
          <SelectDiv>
            <SelectButton href="#">
              <>
                <SelectTitle>
                  <p>{value.title}</p>
                  <Arrow />
                </SelectTitle>
              </>
              <SelectList>
                {value.options.map(option => (
                  <SelectOption href="#">{option}</SelectOption>
                ))}
              </SelectList>
            </SelectButton>
          </SelectDiv>
        ))}
        <SendButtonDiv>
          <SendButton>Enviar mensagem</SendButton>
        </SendButtonDiv>
      </Row>
    </TableOptions>
  );
};
export default tableOptions;
