import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react';
import { ImCross, ImCheckmark } from 'react-icons/im';

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
          <TableCaption color="#2a004f" fontSize="-moz-initial">
            Teste Prático MeuGuru
          </TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NOME</Th>
              <Th>EMAIL</Th>
              <Th>STATUS</Th>
            </Tr>
          </Thead>
          {users &&
            users.map(({ id, nome, email, deletado }: IUser) => (
              <Tbody key={id}>
                <Tr>
                  <Td>{id}</Td>
                  <Td>{nome}</Td>
                  <Td>{email}</Td>
                  <Td>
                    {deletado ? <ImCross color="#ff0000" size={20} fontWeight={700} /> : <ImCheckmark color="#02ff0f" size={25} fontWeight={700} />}
                  </Td>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Main;
