import React from 'react';
import { Box, Input, SearchBoxDiv } from './styles';
import { ReactComponent as Magnifier } from '../../images/magnifier.svg';
import api from '../../services/api';

const SearchBox: React.FC = () => {
  return (
    <SearchBoxDiv>
      <Box>
        <Input
          placeholder="Buscar"
          onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
            const res = await api.get('/webScraping/users/instagram', {
              params: {
                username: e.target.value,
              },
            });
            console.log(res.data);
          }}
        />
        <Magnifier />
      </Box>
    </SearchBoxDiv>
  );
};
export default SearchBox;
