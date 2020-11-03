import React, { useState } from 'react';
import { Title, Wrapper } from '../../styles/global';
// import TableOptions from '../../components/TableOptions';
import Table from '../../components/Table';
import { Grid, Row, ColMd12 } from '../../styles/grid';

// SearchBoxDiv
import { Box, Input, SearchBoxDiv } from '../../components/Searchbox/styles';
import { ReactComponent as Magnifier } from '../../images/magnifier.svg';
import api from '../../services/api';

// tableOptions
import {
  TableOptions,
  SendButton,
  SendButtonDiv,
} from '../../components/TableOptions/styles';

import Select from '../../components/Select';

const selects = [
  {
    key: 'RedesSociais',
    title: <p>Rede Social</p>,
    options: ['Instagram', 'Facebook'],
  },
  {
    key: 'Filtros',
    title: <p>Filtros</p>,
    options: ['Opc 1', 'Opc 2', 'Opc 3'],
  },
];

const UserList: React.FC = () => {
  const [tableContent, setTableContent] = useState('');
  return (
    <>
      <Wrapper>
        <Grid>
          <Row>
            <ColMd12>
              <Title>Lista de usuários</Title>
            </ColMd12>
          </Row>
          <Row>
            <ColMd12>
              <TableOptions>
                <Row>
                  <SearchBoxDiv>
                    <Box>
                      <Input
                        placeholder="Buscar"
                        onChange={async (
                          e: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                          // const res = await api.get(
                          //   '/webScraping/users/instagram',
                          //   {
                          //     params: {
                          //       username: e.target.value,
                          //     },
                          //   },
                          // );
                          setTableContent(e.target.value);
                        }}
                      />
                      <Magnifier />
                    </Box>
                  </SearchBoxDiv>
                  {selects.map(value => (
                    <Select selectInfo={value} key={value.key} />
                  ))}
                  <SendButtonDiv>
                    <SendButton>Enviar mensagem</SendButton>
                  </SendButtonDiv>
                </Row>
              </TableOptions>
            </ColMd12>
          </Row>
          <Row>
            <ColMd12>
              <Table>{tableContent}</Table>
            </ColMd12>
          </Row>
        </Grid>
      </Wrapper>
    </>
  );
};

export default UserList;
