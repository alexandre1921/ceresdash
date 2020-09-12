import React from 'react';
import './App.css';
import MaterialTable, { Column } from 'material-table';
import api from './services/api';

interface Row {
  username?: string | null;
  full_name?: string | null;
  biography?: string | null;
  id?: string | null;
  business_email?: string | null;
  connected_fb_page?: string | null;
  is_business_account?: boolean | null;
  is_private?: boolean | null;
  is_verified?: boolean | null;
  success?: boolean | null;
  external_url?: string | null;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

interface ServerResponse {
  data: Row;
}

export default function MaterialTableDemo() {
  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: 'username', field: 'username' },
      { title: 'full_name', field: 'full_name' },
      { title: 'biography', field: 'biography' },
      { title: 'id', field: 'id' },
      { title: 'business_email', field: 'business_email' },
      { title: 'connected_fb_page', field: 'connected_fb_page' },
      { title: 'is_business_account', field: 'is_business_account' },
      { title: 'is_private', field: 'is_private' },
      { title: 'is_verified', field: 'is_verified' },
      { title: 'success', field: 'success' },
      { title: 'external_url', field: 'external_url' },
    ],
    data: [{}],
  });

  function handleUpdateTable(data: Row[]) {
    setState({
      columns: [
        { title: 'Nome de usuário', field: 'username' },
        { title: 'Nome completo', field: 'full_name' },
        { title: 'Biografia', field: 'biography' },
        { title: 'Id do instagram', field: 'id' },
        { title: 'Email da empresa', field: 'business_email' },
        { title: 'Conectado com o facebook', field: 'connected_fb_page' },
        { title: 'Conta de empresa', field: 'is_business_account' },
        { title: 'Conta privada', field: 'is_private' },
        { title: 'Verificado', field: 'is_verified' },
        { title: 'Sucesso na requisição', field: 'success' },
        { title: 'Site do usuário', field: 'external_url' },
      ],
      data: data,
    });
  }

  React.useEffect(() => {
    let data = [{}];
    api
      .request<Row[]>({
        method: 'get',
        url: '/instagram_scraping',
        transformResponse: (r: ServerResponse) => r.data,
      })
      .then(response => {
        data = JSON.parse(response.request.response);
        handleUpdateTable(data);
      });
  }, []);

  return (
    <MaterialTable
      title="Lista de usuários Instagram"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
