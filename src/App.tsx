import { useEffect, useState } from 'react';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { Movie } from './components/Movie';
import axios from 'axios';

import { Container } from './styles/home';

import { apiKey } from '../secret';
import { generateRandomId } from './utils/generateRandomId';
import { MovieNotFound } from './components/MovieNotFound';

interface MovieProps {
  id: number;
  title: string;
  description: string;
  poster: string;
}

function App() {
  const [movie, setMovie] = useState<MovieProps>();
  const [isRequestFailed, setIsRequestFailed] = useState(false);

  async function handleGetRandomMovie() {
    try {
      const randomId = generateRandomId();
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${randomId}?api_key=${apiKey}&language=pt-BR`
      );
      const data = response.data;
      const movieData = {
        id: data.id,
        title: data.title,
        description: data.overview,
        poster: `https://image.tmdb.org/t/p/w200/${data.poster_path}`,
      };

      setMovie(movieData);
      setIsRequestFailed(false);
    } catch {
      setMovie(undefined);
      setIsRequestFailed(true);
    }
  }

  console.log(movie);

  return (
    <Container>
      <Header />
      {movie ? <Movie movie={movie} /> : ''}
      {isRequestFailed && <MovieNotFound />}
      <Button getRandomMovie={handleGetRandomMovie} />
      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </Container>
  );
}

export default App;
