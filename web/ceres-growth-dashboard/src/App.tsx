import React from 'react';
import './App.css';
import MaterialTable, { Column } from 'material-table';
import userContent from './userContent.json';

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
    data: userContent,
  });

  return (
    <MaterialTable
      title="Editable Example"
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
