'use client';

import useLoadout from '../hooks';
import type { Charm } from '../types';
import CharmContainer from './CharmContainer';
import charmsData from '../data/charms.json';

interface CharmListRowProps {
  charmsToShow: Charm[];
}

const CharmListRow = ({ charmsToShow }: CharmListRowProps) => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  return (
    <div className="flex gap-1 even:ml-10">
      {charmsToShow.map((c) => (
        <CharmContainer
          key={c.id}
          charm={c}
          isSelected={charms.includes(c)}
        />
      ))}
    </div>
  );
};

const CharmList = () => {
  return (
    <section className="flex flex-col gap-1">
      <CharmListRow charmsToShow={charmsData.slice(0, 10)} />
      <CharmListRow charmsToShow={charmsData.slice(10, 20)} />
      <CharmListRow charmsToShow={charmsData.slice(20, 30)} />
      <CharmListRow charmsToShow={charmsData.slice(30, 40)} />
    </section>
  );
};

export default CharmList;
