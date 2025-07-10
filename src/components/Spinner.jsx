import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Loader = styled.div`
  border: 4px solid #E6F6F5;
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <Loader />
  </SpinnerWrapper>
);

export default Spinner;
