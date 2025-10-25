'use client';

import Image from 'next/image';
import CharmList from './components/CharmList';
import CharmsInfo from './components/CharmsInfo';
import Effects from './components/Effects';
import KnightInfo from './components/KnightInfo';
import ScreenSlider from './components/ScreenSlider';
import useLoadout from './hooks';

const HomePage = () => {
  const { loadout } = useLoadout();
  const { health } = loadout;

  return (
    <main className="mt-16 flex min-h-screen justify-between gap-8">
      <ScreenSlider position="left">
        <Effects />
      </ScreenSlider>
      <section className="relative border-x border-gray-700 px-10 pt-4">
        <CharmsInfo />
        <hr className="my-4 border-gray-700" />
        <CharmList />
        <hr className="my-4 border-gray-700" />
        <div className="flex flex-col">
          <h2 className="text-center text-2xl font-bold">Knight</h2>
          <hr className="my-2 border-gray-700" />
          <div className="flex items-center justify-between gap-2 font-bold">
            <h3>Health</h3>
            <div className="flex">
              {Array.from({ length: health }).map((_, i) => (
                <Image
                  key={i}
                  src="/ui/mask.png"
                  alt="Mask Shard"
                  width={25}
                  height={25}
                />
              ))}
            </div>
          </div>
        </div>
        <KnightInfo />
      </section>
      <ScreenSlider position="right">
        <Effects />
      </ScreenSlider>
    </main>
  );
};

export default HomePage;
