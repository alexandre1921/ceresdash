import React, { useState } from 'react';
import {
  TableComponent,
  Thead,
  Tbody,
  Tfoot,
  Footer,
  FooterText,
  ActionsMenu,
} from './styles';
import { ReactComponent as Actions } from '../../images/actions.svg';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import { ReactComponent as Checkbox } from '../../images/checkbox.svg';
import { ReactComponent as MarkedCheckbox } from '../../images/markedCheckbox.svg';
import Modal from '../Modal';
import ModalList from '../ModalList';
import ModalSendMessage from '../ModalSendMessage';
import api from '../../services/api';

interface TableInfo {
  thead: (string | JSX.Element)[];
  tbody: (string | JSX.Element)[][];
  tfoot: JSX.Element[];
}

const marker = (
  callbacke: React.Dispatch<
    React.SetStateAction<{
      thead: (string | JSX.Element)[];
      tbody: (string | JSX.Element)[][];
      tfoot: JSX.Element[];
    }>
  >,
  tableInfo: TableInfo,
  tableLocal: string,
  line: number,
  marked: boolean,
) => {
  const newTable = { ...tableInfo };
  console.log(newTable.tbody[line][0]);
  if (tableLocal === 'thead')
    newTable.thead[0] = (
      <button
        type="button"
        onClick={() => {
          marker(callbacke, tableInfo, 'thead', 0, !marked);
        }}
      >
        {marked ? <Checkbox /> : <MarkedCheckbox />}
      </button>
    );
  if (tableLocal === 'tbody')
    newTable.tbody[line][0] = (
      <button
        type="button"
        onClick={() => {
          marker(callbacke, tableInfo, 'tbody', 0, !marked);
        }}
      >
        {marked ? <Checkbox /> : <MarkedCheckbox />}
      </button>
    );
  callbacke(newTable);
};

const TableBody=(tableContent:[{full_name:string,username:string,id:string}])=>{
  const tbody = [];
  let value;
  for (let i = 0; i < tableContent.length; i++) {
      value=tableContent[i];
    tbody.push([
      <button type="button">
        <Checkbox />
      </button>,
      value.full_name,
      `@${value.username}`,
      value.id,
      'more info',
    ]);
  }
  console.log(tbody);
  return tbody;
};

interface Props {
  tableContent:any;
}

const Table: React.FC<Props> = (props:Props) => {
  const [tableInfo, setTableInfo] = useState({
    thead: [
      <button
        type="button"
        onClick={() => {
          marker(setTableInfo, tableInfo, 'thead', 0, false);
        }}
      >
        <Checkbox />
      </button>,
      'Nome',
      'Username',
      'ID',
      'Ações',
    ],
    tbody: [[<h1>null</h1>, '', '', '', '']],
    tfoot: [
      <Footer>
        <FooterText>1 de 2000</FooterText>
        <Arrow />
        <Arrow />
      </Footer>,
    ],
  });

  const [[isOpen, modal], setModal] = useState([false, '']);

  return (
    <>
      <Modal open={isOpen}>
        {(() => {
          switch (modal) {
            case 'list':
              return (
                <ModalList
                  closeModal={() => {
                    setModal([false, '']);
                  }}
                />
              );
            case 'sendMessage':
              return (
                <ModalSendMessage
                  closeModal={() => {
                    setModal([false, '']);
                  }}
                />
              );
            default:
              return null;
          }
        })()}
      </Modal>
      <TableComponent>
        <Thead>
          <tr>
            {tableInfo.thead.map(value => (
              <th>{value}</th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {TableBody(props.tableContent).map((tbodyRow, trIndex) => (
            <tr>
              {tbodyRow.map((value, index) => (
                <td>
                  {(() => {
                    if (index === tableInfo.thead.length - 1)
                      return (
                        <button type="button">
                          <ActionsMenu>
                            <div>
                              <button
                                type="button"
                                onClick={() => {
                                  setModal([true, 'list']);
                                }}
                              >
                                Mais informações
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                onClick={() => {
                                  setModal([true, 'sendMessage']);
                                }}
                              >
                                Enviar mensagem
                              </button>
                            </div>
                          </ActionsMenu>
                          <Actions />
                        </button>
                      );
                    return value;
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </Tbody>
        <Tfoot>
          <tr>
            {tableInfo.tfoot.map(value => (
              <td colSpan={5}>{value}</td>
            ))}
          </tr>
        </Tfoot>
      </TableComponent>
    </>
  );
};
export default Table;
