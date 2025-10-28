'use client';

import { useState } from 'react';
import CharmList from '../components/CharmSelector';
import CurrentCharms from '../components/CurrentCharms';
import Effects from '../components/Effects';
import KnightStats from '../components/KnightStats';
import ScreenSlider from '../components/ScreenSlider';
import NailSelector from '../components/NailSelector';
import SpellSelector from '../components/SpellSelector';

enum AVAILABLE_TABS {
  CHARMS = 'charms',
  NAILS = 'nails',
  SPELLS = 'spells'
}

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<AVAILABLE_TABS>(AVAILABLE_TABS.CHARMS);

  return (
    <main className="mt-16 flex min-h-screen justify-between gap-8">
      <ScreenSlider position="left">
        <Effects />
      </ScreenSlider>
      <section className="relative border-x border-gray-700 px-10 pt-4">
        <CurrentCharms />
        <hr className="my-2 border-gray-700" />
        {activeTab === 'charms' && <CharmList />}
        {activeTab === 'nails' && <NailSelector />}
        {activeTab === 'spells' && <SpellSelector />}
        <hr className="my-2 border-gray-700" />
        <div className="flex justify-center gap-12">
          <button onClick={() => setActiveTab(AVAILABLE_TABS.CHARMS)}>CHARMS</button>
          <button onClick={() => setActiveTab(AVAILABLE_TABS.NAILS)}>NAILS</button>
          <button onClick={() => setActiveTab(AVAILABLE_TABS.SPELLS)}>SPELLS</button>
        </div>
        <hr className="my-2 border-gray-700" />
        <KnightStats />
      </section>
      <ScreenSlider position="right">
        <Effects />
      </ScreenSlider>
    </main>
  );
};

export default HomePage;
