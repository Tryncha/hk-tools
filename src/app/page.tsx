import CharmList from './components/CharmList';
import CharmsInfo from './components/CharmsInfo';
import Effects from './components/Effects';
import KnightInfo from './components/KnightInfo';
import ScreenSlider from './components/ScreenSlider';

const HomePage = () => {
  return (
    <main className="mt-16 flex min-h-screen justify-between gap-8">
      <ScreenSlider position="left">
        <Effects />
      </ScreenSlider>
      <section className="relative border-x border-gray-700 px-10 pt-4">
        <CharmsInfo />
        <hr className="my-2 border-gray-700" />
        <CharmList />
        <hr className="my-2 border-gray-700" />
        <KnightInfo />
      </section>
      <ScreenSlider position="right">
        <Effects />
      </ScreenSlider>
    </main>
  );
};

export default HomePage;
