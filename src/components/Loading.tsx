import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  margin: 0 auto;
  padding: 5rem;
  width: 10rem;
  height: 10rem;
  border: 1.5rem solid rgba(255, 255, 255, 0.3);
  border-top: 1.5rem solid #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  @media (max-width: 500px) {
    padding: 2rem;
    width: 4rem;
    height: 4rem;
  }
`;

export const Loading: React.FC = () => <StyledLoading />;
