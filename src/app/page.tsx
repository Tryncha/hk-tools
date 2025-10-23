import CharmList from './components/CharmList';
import CharmsInfo from './components/CharmsInfo';
import Effects from './components/Effects';
import KnightInfo from './components/KnightInfo';

const HomePage = () => {
  return (
    <main className="flex justify-center gap-8">
      <section>
        <CharmsInfo />
        <hr className="my-8" />
        <CharmList />
        <hr className="my-8" />
        <KnightInfo />
      </section>
      <Effects />
    </main>
  );
};

export default HomePage;
