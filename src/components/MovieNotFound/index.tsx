import movieNotFoundImg from '../../assets/movie-not-found.png';

import { Container } from './styles';

export function MovieNotFound() {
  return (
    <Container>
      <img src={movieNotFoundImg} alt={`Foto de um monitor com código`} />
      <div>
        <h2>Ops, hoje não é dia de assistir filme. Bora codar! 🚀</h2>
      </div>
    </Container>
  );
}
