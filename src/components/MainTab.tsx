'use client';

import { useState } from 'react';
import CharmList from './CharmSelector';
import CurrentCharms from './CurrentCharms';
import KnightStats from './KnightStats';
import NailSelector from './NailSelector';
import SpellSelector from './SpellSelector';

enum AVAILABLE_TABS {
  CHARMS = 'charms',
  NAILS = 'nails',
  SPELLS = 'spells'
}

const MainTab = () => {
  const [activeTab, setActiveTab] = useState<AVAILABLE_TABS>(AVAILABLE_TABS.CHARMS);

  return (
    <section className="relative px-10 py-4">
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
  );
};

export default MainTab;
