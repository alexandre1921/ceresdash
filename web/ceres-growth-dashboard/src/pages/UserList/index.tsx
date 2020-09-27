import React from 'react';
import {
  Wrapper,
  Box,
  SearchBox,
  Magnifier,
  TableOptions,
  SelectTitle,
  SelectButton,
  SelectList,
  SelectOption,
  Arrow,
  SendButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
} from './styles';
import { Title } from '../../styles/global';
import { Grid, Row, ColMd2, ColMd6, ColMd12 } from '../../styles/grid';
import arrow from '../../assets/arrow.svg';
import magnifier from '../../assets/magnifier.svg';
import actions from '../../assets/actions.svg';

const UserList: React.FC = () => {
  const selects = [
    { title: 'Rede Social', options: ['Instagram', 'Facebook'] },
    { title: 'Filtros', options: ['Opc 1', 'Opc 2', 'Opc 3'] },
  ];

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
            <TableOptions>
              <Row>
                <ColMd6>
                  <Box>
                    <SearchBox placeholder="Buscar" />
                    <Magnifier src={magnifier} alt="magnifier" />
                  </Box>
                </ColMd6>
                {selects.map(value => (
                  <ColMd2>
                    <SelectButton href="#">
                      <>
                        <SelectTitle>
                          <p>{value.title}</p>
                          <Arrow src={arrow} alt="arrow" />
                        </SelectTitle>
                      </>
                      <SelectList>
                        {value.options.map(option => (
                          <SelectOption href="#">{option}</SelectOption>
                        ))}
                      </SelectList>
                    </SelectButton>
                  </ColMd2>
                ))}
                <ColMd2>
                  <SendButton disabled>Enviar mensagem</SendButton>
                </ColMd2>
              </Row>
            </TableOptions>
          </ColMd12>
        </Row>
        <Row>
          <ColMd12>
            <Table>
              <Thead>
                <tr>
                  <th>1</th>
                  <th>Nome</th>
                  <th>Username</th>
                  <th>Facebook ID</th>
                  <th>Ações</th>
                </tr>
              </Thead>
              <Tbody>
                <tr>
                  <td>Body content 1</td>
                  <td>Body content 2</td>
                  <td>Body content 3</td>
                  <td>Body content 4</td>
                  <td>
                    <img src={actions} alt="actions" />
                  </td>
                </tr>
                <tr>
                  <td>Body content 1</td>
                  <td>Body content 2</td>
                  <td>Body content 3</td>
                  <td>Body content 4</td>
                  <td>
                    <img src={actions} alt="actions" />
                  </td>
                </tr>
              </Tbody>
              <Tfoot>
                <tr>
                  <td>Footer content 1</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Footer content 5</td>
                </tr>
              </Tfoot>
            </Table>
          </ColMd12>
        </Row>
      </Grid>
    </Wrapper>
  );
};

export default UserList;
