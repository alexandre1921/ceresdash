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
          onChange={async () => {
            const res = await api.get('/webScraping/users/instagram', {
              params: {
                username: 'alex',
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
