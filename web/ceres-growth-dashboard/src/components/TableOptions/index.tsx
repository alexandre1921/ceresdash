import React from 'react';
import { TableOptions, SendButton, SendButtonDiv } from './styles';
import { Row } from '../../styles/grid';
import SearchBox from '../Searchbox';
import Select from '../Select';


interface SelectTable{
  key: string;
  title: JSX.Element;
  options: string[];
  values: Array<string>;
  onSelect: (value: string) => void;
}

interface Props {
  onInputMagnifier: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  selects: Array<SelectTable>;
}

const tableOptions: React.FC<Props> = ({selects, onInputMagnifier}) => {
  return (
    <TableOptions>
      <Row>
        <SearchBox onInputMagnifier={onInputMagnifier}/>
        {selects.map(value => (
          <Select selectInfo={value} key={value.key} onSelect={value.onSelect}/>
        ))}
        <SendButtonDiv>
          <SendButton>Enviar mensagem</SendButton>
        </SendButtonDiv>
      </Row>
    </TableOptions>
  );
};
export default tableOptions;
