import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12.6rem;

  img {
    width: min(100%, 88px);
    margin-top: 1rem;
  }

  h2 {
    font-size: 4rem;
    font-weight: bold;
  }
`;
