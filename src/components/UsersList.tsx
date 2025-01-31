import { useEffect } from 'react';
import styled from 'styled-components';

import { GET_USERS, GET_TODOS } from '../api';
import { useUserState, useUserDispatch } from '../context/UserContext';
import { Container } from './Container';
import { Loading } from './Loading';
import { Error } from './Error';
import UserTableRow from './User';

const Wrapper = styled.section`
  margin: 0 auto;
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  font-size: 16px;
  border: 1px solid var(--colors-ui-borders);
  border-radius: var(--radii);
  overflow: hidden;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  background-color: var(--colors-ui);

  th {
    padding: 1.5rem 0;
    border-bottom: 1px solid var(--colors-ui-borders);
    font-size: var(--fs-sm-md);
    color: var(--colors-text-alt);

    @media (max-width: 768px) {
      font-size: var(--fs-xsm);
    }
  }
`;

const NumberHeaderCell = styled.th`
  width: 5%;

  @media (max-width: 768px) {
    width: 10%;
  }
`;

const UserHeaderCell = styled.th`
  width: 80%;
  text-align: left;

  @media (max-width: 960px) {
    width: 60%;
  }
`;

const CounterHeaderCell = styled.th`
  text-align: left;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid var(--colors-ui-borders);
  }
`;

const UsersList = () => {
  const dispatch = useUserDispatch();
  const { users: userState, todos: todosState, error } = useUserState();
  const { ids: userIDs, entities: users } = userState;
  const { ids: todoIDs, entities: todos } = todosState;

  useEffect(() => {
    dispatch({ type: 'FETCH_START' });
    Promise.all([fetch(GET_USERS), fetch(GET_TODOS)])
      .then(async ([usersRes, todosRes]) => {
        const users = await usersRes.json();
        const todos = await todosRes.json();

        dispatch({ type: 'FETCH_SUCCESS_USERS', payload: users });
        dispatch({ type: 'FETCH_SUCCESS_TODOS', payload: todos });
      })
      .catch((error) => {
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      });
  }, [dispatch]);

  return (
    <Container>
      {userState.status === 'loading' && <Loading />}
      {userState.status === 'error' && <Error>{error}</Error>}
      {userState.status === 'idle' && (
        <Wrapper>
          <TableContainer>
            <TableHeader>
              <tr>
                <NumberHeaderCell>#</NumberHeaderCell>
                <UserHeaderCell>USERNAME</UserHeaderCell>
                <CounterHeaderCell>TODO COUNT</CounterHeaderCell>
              </tr>
            </TableHeader>
            <TableBody>
              {userIDs.map((id: number, index: number) => {
                const user = users[id];
                const todosQty = todoIDs.reduce((acc: number, i: number) => {
                  return todos[i].userId === id && !todos[i].completed ? acc + 1 : acc;
                }, 0);
                return (
                  <UserTableRow
                    key={id}
                    index={index + 1}
                    email={user.email}
                    username={user.name}
                    todoCount={todosQty}
                  />
                );
              })}
            </TableBody>
          </TableContainer>
        </Wrapper>
      )}
    </Container>
  );
};

export default UsersList;
