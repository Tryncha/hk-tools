import CharmList from './components/CharmList';
import NotchesContainer from './components/NotchesContainer';
import CurrentCharms from './components/CurrentCharms';

const HomePage = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <section>
        <section className="flex flex-col">
          <CurrentCharms />
          <NotchesContainer />
        </section>
        <hr className="my-4" />
        <CharmList />
      </section>
    </main>
  );
};

export default HomePage;
