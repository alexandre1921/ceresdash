import React from 'react';
import { Box, Input, SearchBoxDiv } from './styles';
import { ReactComponent as Magnifier } from '../../images/magnifier.svg';

interface Props {
  onInputMagnifier: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

const SearchBox: React.FC<Props> = ({onInputMagnifier}) => {
  return (
    <SearchBoxDiv>
      <Box>
        <Input
          placeholder="Buscar"
          onChange={onInputMagnifier}
        />
        <Magnifier />
      </Box>
    </SearchBoxDiv>
  );
};
export default SearchBox;
