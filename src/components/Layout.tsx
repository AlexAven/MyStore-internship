import styled from 'styled-components';
import { ChildrenProps } from '../types';

import Header from './Header';
import Main from './Main';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem 3rem;
  min-height: 100vh;
  box-sizing: content-box;

  @media (max-width: 345px) {
    padding: 0;
  }
`;

const Layout = ({ children }: ChildrenProps) => {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
    </Wrapper>
  );
};

export default Layout;
