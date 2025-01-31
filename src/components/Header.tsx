import styled from 'styled-components';

const HeaderEl = styled.header`
  margin: 0;
`;

const Wrapper = styled.div`
  max-width: 1569px;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 0 2rem;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  width: 30%;
  text-decoration: none;
  font-size: var(--fs-xlg);
  font-weight: var(--fw-bold);
  padding-bottom: 0.5rem;

  color: inherit;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
  @media (min-width: 501px) and (max-width: 960px) {
    font-size: var(--fs-lg);
  }

  @media (max-width: 500px) {
    font-size: var(--fs-md-lg);
  }
`;

const Desription = styled.h3`
  font-size: var(--fs-md);
  color: var(--colors-text-alt);

  @media (max-width: 768px) {
    font-size: var(--fs-sm-md);
  }
`;

const Header = () => {
  return (
    <HeaderEl>
      <Wrapper>
        <TitleWrapper>
          <Title as="a" href="/">
            User To-Do Table
          </Title>
        </TitleWrapper>
        <Desription>User task table for effective planning.</Desription>
      </Wrapper>
    </HeaderEl>
  );
};

export default Header;
