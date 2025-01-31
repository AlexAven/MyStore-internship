import styled from 'styled-components';

import { IoPeopleCircleOutline } from 'react-icons/io5';

const TableRow = styled.tr`
  border-bottom: 1px solid var(--colors-ui-borders);
  &:last-child td {
    border-bottom: none;
  }
`;

const NumberCell = styled.td`
  width: 5%;
  padding: 1.3rem 0;
  text-align: center;
  border-bottom: 1px solid var(--colors-ui-borders);

  @media (max-width: 768px) {
    font-size: var(--fs-sm-md);
  }
`;

const UserCell = styled.td`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--colors-ui-borders);
  gap: 1.5rem;
  padding: 1rem 0;
  text-align: left;
`;
const CounterCell = styled.td`
  border-bottom: 1px solid var(--colors-ui-borders);
  padding: 1rem 0;
  text-align: left;

  @media (min-width: 769px) and (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: var(--fs-sm-md);
  }
`;

const UserIcon = styled(IoPeopleCircleOutline)`
  opacity: 0.4;
  width: 4rem;
  height: 4rem;
  min-height: 2.3rem;
  min-width: 2.3rem;

  @media (max-width: 768px) {
    width: 2.8rem;
    height: 2.8rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  span {
    font-size: var(--fs-sm-md);
    color: var(--colors-text-alt);

    @media (max-width: 768px) {
      font-size: var(--fs-sm);
    }
  }

  @media (max-width: 768px) {
    font-size: var(--fs-sm-md);
  }
`;

interface UserTableType {
  index: number;
  username: string;
  todoCount: number;
  email: string;
}

const UserTableRow = ({ index, username, email, todoCount }: UserTableType) => (
  <TableRow>
    <NumberCell>{index}</NumberCell>
    <UserCell>
      <UserIcon />
      <UserInfo>
        {username}
        <span>{email}</span>
      </UserInfo>
    </UserCell>
    <CounterCell>{todoCount}</CounterCell>
  </TableRow>
);

export default UserTableRow;
