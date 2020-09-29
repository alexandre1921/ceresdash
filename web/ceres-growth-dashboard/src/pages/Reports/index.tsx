import React from 'react';
import { Title, Wrapper } from '../../styles/global';
import { Grid, Row, ColMd12 } from '../../styles/grid';

const Reports: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <Row>
          <ColMd12>
            <Title>Relatórios</Title>
          </ColMd12>
        </Row>
      </Grid>
    </Wrapper>
  );
};

export default Reports;
