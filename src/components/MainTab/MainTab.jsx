import { useState } from 'react';
import CharmList from '../CharmList/CharmList';
import NailsContainer from '../NailsContainer/NailsContainer';
import './MainTab.css';

const TABS = {
  CHARMS: 'charms',
  NAILS: 'nails',
  SPELLS: 'spells'
};

const MainTab = () => {
  const [tab, setTab] = useState(TABS.CHARMS);

  return (
    <>
      <section className="MainTab">
        {tab === TABS.CHARMS ? <CharmList /> : null}
        {tab === TABS.NAILS ? <NailsContainer /> : null}
        {tab === TABS.SPELLS ? null : null}
      </section>
      <hr className="u-secondaryHr" />
      <div className="MainTab-buttons">
        <button onClick={() => setTab(TABS.CHARMS)}>CHARMS</button>
        <button onClick={() => setTab(TABS.NAILS)}>NAILS</button>
        <button onClick={() => setTab(TABS.SPELLS)}>SPELLS</button>
      </div>
    </>
  );
};

export default MainTab;
