import Header from '~/components/Header';
import Main from '~/components/Main';
import Section from '~/components/Section';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Header />
      <Section />
      <Main />
    </Container>
  );
}
