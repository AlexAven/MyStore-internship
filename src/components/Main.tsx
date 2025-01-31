import styled from 'styled-components';
import { ChildrenProps } from '../types';

import { Container } from './Container';

const Wrapper = styled.main`
  flex-grow: 1;
  padding: 2rem 0;
`;

const Main = ({ children }: ChildrenProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Main;
