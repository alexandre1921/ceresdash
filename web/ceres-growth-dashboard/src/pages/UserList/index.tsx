import React, { useEffect, useState, useCallback } from 'react';
import { Title, Wrapper } from '../../styles/global';
import TableOptions from '../../components/TableOptions';
import Table from '../../components/Table';
import { Grid, Row, ColMd12 } from '../../styles/grid';

import api from '../../services/api';
 
const UserList: React.FC = () => {
  const [redesSociais, setRedesSociais] = useState("Instagram");
  const [filtros, setFiltros] = useState("");
  const [tableContent, setTableContent] = useState('');

  const selects = [
    {
      key: 'RedesSociais',
      title: <p>Rede Social</p>,
      options: ['Instagram', 'Facebook'],
      onSelect: (value: string) => {
        setRedesSociais(value);
      },
    },
    {
      key: 'Filtros',
      title: <p>Filtros</p>,
      options: ['Opc 1', 'Opc 2', 'Opc 3'],
      onSelect: (value: string) => {
        setFiltros(value);
      },
    },
  ];

  const searchApi = useCallback(async (username:string) => {
    return api.get(
      `/webScraping/users/${redesSociais.toLocaleLowerCase()}`,
      {
        params: {
          username,
          filtro: filtros,
        },
      },
    )
  }, [redesSociais, filtros]);

  const onInputMagnifier = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (redesSociais)
      searchApi(e.target.value).then((res)=>{
        setTableContent(res.data);
      });
  }

  useEffect(() => {
    searchApi('').then((res) => {
        setTableContent(res.data)
    });
  },[searchApi])

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
              <TableOptions onInputMagnifier={onInputMagnifier} selects={selects} />
            </ColMd12>
          </Row>
          <Row>
            <ColMd12>
              <Table tableContent={tableContent}>{tableContent}</Table>
            </ColMd12>
          </Row>
        </Grid>
      </Wrapper>
    </>
  );
};

export default UserList;
