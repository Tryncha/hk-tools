import CharmList from './components/CharmList';
import CharmsInfo from './components/CharmsInfo';
import KnightInfo from './components/KnightInfo';

const HomePage = () => {
  return (
    <main className="flex justify-center">
      <section>
        <CharmsInfo />
        <hr className="my-8" />
        <CharmList />
        <hr className="my-8" />
        <KnightInfo />
      </section>
    </main>
  );
};

export default HomePage;
