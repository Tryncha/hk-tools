'use client';

import { useState } from 'react';
import CharmList from './components/CharmList';
import CharmsInfo from './components/CharmsInfo';
import Effects from './components/Effects';
import KnightInfo from './components/KnightInfo';
import ScreenSlider from './components/ScreenSlider';
import { NAILS } from './data/nails';
import NailContainer from './components/NailContainer';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<'charms' | 'nails' | 'spells'>('nails');

  return (
    <main className="mt-16 flex min-h-screen justify-between gap-8">
      <ScreenSlider position="left">
        <Effects />
      </ScreenSlider>
      <section className="relative border-x border-gray-700 px-10 pt-4">
        <CharmsInfo />
        <hr className="my-2 border-gray-700" />
        {activeTab === 'charms' && <CharmList />}
        {activeTab === 'nails' && (
          <section className="flex justify-center py-4">
            {NAILS.map((n) => (
              <NailContainer
                key={n.id}
                nail={n}
              />
            ))}
          </section>
        )}
        <hr className="my-2 border-gray-700" />
        <div className="flex justify-center gap-12">
          <button onClick={() => setActiveTab('charms')}>CHARMS</button>
          <button onClick={() => setActiveTab('nails')}>NAILS</button>
          <button onClick={() => setActiveTab('spells')}>SPELLS</button>
        </div>
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
