import randomImg from '../../assets/shuffle.svg';

import { Container } from './styles';

export function Button() {
  return (
    <Container>
      <img
        src={randomImg}
        alt="Duas setas se cruzando em formato de x, representando um sinal de aleatório."
      />
      <p>Encontrar filme</p>
    </Container>
  );
}
