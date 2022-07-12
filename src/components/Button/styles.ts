import styled from 'styled-components';

export const Container = styled.button`
  width: 18rem;
  height: 4.7rem;
  border-radius: 0.5rem;
  background: var(--bg-button);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  img {
    width: 3.5rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
