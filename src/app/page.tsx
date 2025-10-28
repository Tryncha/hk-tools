import ScreenSlider from '../components/ScreenSlider';
import Effects from '../components/Effects';
import MainTab from '@/components/MainTab';

const HomePage = () => {
  return (
    <main className="mt-16 flex min-h-screen justify-between gap-8">
      <ScreenSlider position="left">
        <Effects />
      </ScreenSlider>
      <MainTab />
      <ScreenSlider position="right">
        <Effects />
      </ScreenSlider>
    </main>
  );
};

export default HomePage;
