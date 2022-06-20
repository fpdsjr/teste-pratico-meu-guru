import Header from '~/components/Header';
import Main from '~/components/Main';
import Menu from '~/components/Menu';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Menu />
      <Main />
    </Container>
  );
}
