import React from 'react';
import Newfollowerchart from '../../components/Graphics/new_followers_chart';
import Mostfollowerssegments from '../../components/Graphics/mostfollowerssegments';
import Numberoffollowers from '../../components/Graphics/numberoffollowers';
import SearchBox from '../../components/SearchboxReports/index';
import Select from '../../components/SelectReports/index';
import { Grid, Row, ColMd12 } from '../../styles/grid';

const Reports: React.FC = () => {
  return (
    <>
      <Grid>
        <Row>
          <ColMd12>
            <SearchBox />
            <Select />
          </ColMd12>
        </Row>
        <ColMd12>
          <Newfollowerchart />
          <Numberoffollowers />
        </ColMd12>
        <ColMd12>
          <Mostfollowerssegments />
        </ColMd12>
      </Grid>
    </>
  );
};

export default Reports;
