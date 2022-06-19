import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';

import { Container } from './styles';
import { useUsers } from '~/context/UserProvider/useUser';

interface IUser {
  id: string;
  nome: string;
  email: string;
  deletado: boolean;
}

function Main() {
  const { users } = useUsers();

  return (
    <Container>
      <TableContainer>
        <Table variant="simple" colorScheme="twitter" maxWidth="-moz-max-content">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NOME</Th>
              <Th>EMAIL</Th>
              <Th>EXCLUÍDO</Th>
            </Tr>
          </Thead>
          {users &&
            users.map(({ id, nome, email, deletado }: IUser) => (
              <Tbody key={id}>
                <Tr>
                  <Td>{id}</Td>
                  <Td>{nome}</Td>
                  <Td>{email}</Td>
                  <Td>{deletado ? 'TRUE' : 'FALSE'}</Td>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Main;
