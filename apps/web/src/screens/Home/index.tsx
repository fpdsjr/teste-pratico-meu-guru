import Head from 'next/head';
import Header from '~/components/Header';
import Main from '~/components/Main';
import Menu from '~/components/Menu';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>MeuGuru</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Menu />
      <Main />
    </Container>
  );
}
