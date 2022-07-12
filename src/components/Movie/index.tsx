import posterMovieImg from '../../assets/poster.png';

import { Container } from './styles';

interface MovieProps {
  movie: {
    id: number;
    title: string;
    description: string;
    poster: string;
  };
}

export function Movie({ movie }: MovieProps) {
  return (
    <Container>
      <img src={movie.poster} alt={`Foto de capa do filme ${movie.title}`} />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>
    </Container>
  );
}
