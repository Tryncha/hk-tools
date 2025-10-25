import CharmList from './components/CharmList';
import CharmsInfo from './components/CharmsInfo';
import Effects from './components/Effects';
import KnightInfo from './components/KnightInfo';
import ScreenSlider from './components/ScreenSlider';

const HomePage = () => {
  return (
    <main className="flex min-h-screen justify-between gap-8">
      <ScreenSlider position="left">
        <Effects />
      </ScreenSlider>
      <section>
        <CharmsInfo />
        <hr className="my-8" />
        <CharmList />
        <hr className="my-8" />
        <KnightInfo />
      </section>
      <ScreenSlider position="right">
        <Effects />
      </ScreenSlider>
    </main>
  );
};

export default HomePage;
