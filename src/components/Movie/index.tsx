import posterMovieImg from '../../assets/poster.png';

import { Container } from './styles';

export function Movie() {
  return (
    <Container>
      <img src={posterMovieImg} alt="Foto de capa do filme" />
      <div>
        <h2>Os Caça-Fantasma</h2>
        <p>
          Em Nova York Peter Venkman, Ray Stantz e Egon Spengler são três
          cientistas do departamento de psicologia da Columbia University, que
          se dedicam ao estudo de casos paranormais. Quando a subvenção termina
          eles são despedidos e Venkman sugere que abram um negócio próprio, a
          exterminadora de fantasmas Ghostbusters. Inicialmente eles só têm
          despesas e nenhum cliente, mas eis que surge Dana Barrett, uma
          violoncelista que teve uma experiência assustadora em seu apartamento.
        </p>
      </div>
    </Container>
  );
}
