import { ButtonHTMLAttributes } from 'react';
import randomImg from '../../assets/shuffle.svg';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  getRandomMovie: () => void;
}

export function Button({ getRandomMovie }: ButtonProps) {
  return (
    <Container onClick={getRandomMovie}>
      <img
        src={randomImg}
        alt="Duas setas se cruzando em formato de x, representando um sinal de aleatório."
      />
      <p>Encontrar filme</p>
    </Container>
  );
}
