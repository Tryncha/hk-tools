import ScreenSlider from '../components/ScreenSlider';
import Effects from '../components/Effects';
import MainTab from '../components/MainTab';
import EnemiesList from '../components/EnemiesList';

const HomePage = () => {
  return (
    <main className="mt-18 flex justify-center">
      <ScreenSlider position="left">
        <EnemiesList />
      </ScreenSlider>
      <MainTab />
      <ScreenSlider position="right">
        <Effects />
      </ScreenSlider>
    </main>
  );
};

export default HomePage;
