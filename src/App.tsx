import { Button } from './components/Button';
import { Header } from './components/Header';
import { Movie } from './components/Movie';
import { Container } from './styles/home';

function App() {
  return (
    <Container>
      <Header />
      <Movie />
      <Button />
      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </Container>
  );
}

export default App;
