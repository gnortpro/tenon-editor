import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const MainEditor = dynamic(
  () => {
    return import('../components/EmailEditor');
  },
  { ssr: false }
);

const Home: NextPage = () => {
  return <MainEditor />;
};

export default Home;
