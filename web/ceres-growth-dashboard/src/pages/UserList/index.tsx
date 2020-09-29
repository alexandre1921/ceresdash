import React from 'react';
import { Title, Wrapper } from '../../styles/global';
import TableOptions from '../../components/TableOptions';
import Table from '../../components/Table';
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
