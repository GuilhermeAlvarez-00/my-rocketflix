import randomImg from '../../assets/favico/android-chrome-512x512.png';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <img
        src={randomImg}
        alt="Duas setas se cruzando em formato de x, representando um sinal de aleatório."
      />
      <h2>Não sabe o que assistir?</h2>
    </Container>
  );
}
