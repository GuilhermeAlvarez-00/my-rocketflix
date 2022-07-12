import styled from 'styled-components';

export const Container = styled.div`
  width: min(100%, 62.8rem);
  display: flex;
  align-items: center;
  gap: 3.4rem;
  margin-top: 3rem;

  img {
    width: 17.1rem;
  }

  h2 {
    font-size: 2rem;
    max-width: 38.7rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0 3rem;
  }
`;
