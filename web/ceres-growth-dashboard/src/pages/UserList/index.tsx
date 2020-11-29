import React, { useEffect, useState, useCallback } from 'react';
import { Title, Wrapper } from '../../styles/global';
import TableOptions from '../../components/TableOptions';
import Table from '../../components/Table';
import { Grid, Row, ColMd12 } from '../../styles/grid';

import api from '../../services/api';
 
const UserList: React.FC = () => {
  const [redesSociais, setRedesSociais] = useState({title:"Rede Social",value:""});
  const [filtros, setFiltros] = useState({title:"Filtros",value:""});
  const [inputMagnifier, setInputMagnifier] = useState("");
  const [tableContent, setTableContent] = useState('');

  const selects = [
    {
      key: 'RedesSociais',
      title: <p>{redesSociais.title}</p>,
      options: ['Instagram', 'Facebook'],
      onSelect: (value: string) => {
        setRedesSociais({title:value,value});
      },
    },
    {
      key: 'Filtros',
      title: <p>{filtros.title}</p>,
      options: ['Opc 1', 'Opc 2', 'Opc 3'],
      onSelect: (value: string) => {
        setFiltros({title:value,value});
      },
    },
  ];

  const searchApi = useCallback(async (username:string) => {
    return api.get(
      `/webScraping/users/${redesSociais.value.toLocaleLowerCase()}`,
      {
        params: {
          username,
          filtro: filtros,
        },
      },
    )
  }, [redesSociais, filtros]);

  const onInputMagnifier = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMagnifier(e.target.value);
    if (redesSociais.value)
      searchApi(e.target.value).then((res)=>{
        setTableContent(res.data);
      });
  }

  useEffect(() => {
    if (redesSociais.value)
      searchApi(inputMagnifier).then((res) => {
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
