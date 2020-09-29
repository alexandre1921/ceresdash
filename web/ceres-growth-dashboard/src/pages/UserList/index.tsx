import React from 'react';
import { Wrapper, Title } from './styles';
import TableOptions from './tableOptions';
import Table from './table';
import { Grid, Row, ColMd12 } from '../../styles/grid';

const UserList: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <ColMd12>
            <Title>Lista de usuários</Title>
          </ColMd12>
        </Row>
        <Row>
          <ColMd12>
            <TableOptions />
          </ColMd12>
        </Row>
        <Row>
          <ColMd12>
            <Table />
          </ColMd12>
        </Row>
      </Grid>
    </Wrapper>
  );
};

export default UserList;
