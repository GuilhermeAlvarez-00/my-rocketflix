import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 3rem;
  }

  > p {
    font-size: 1.4rem;
    font-weight: 400;
    max-width: 38rem;
    text-align: center;
    margin-top: 2.6rem;
  }

  @media screen and (max-width: 768px) {
    > p {
      font-size: 1.2rem;
    }
  }
`;
