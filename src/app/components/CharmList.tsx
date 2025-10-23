'use client';

import useLoadout from '../hooks';
import type { Charm } from '../types';
import CharmContainer from './CharmContainer';
import { CHARMS } from '../data/charms';

interface CharmListRowProps {
  charmsToShow: Charm[];
}

const CharmListRow = ({ charmsToShow }: CharmListRowProps) => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  return (
    <div className="flex gap-1 odd:mr-10 even:ml-10">
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
    <section className="flex flex-col items-center gap-1 py-2">
      <CharmListRow charmsToShow={CHARMS.slice(0, 10)} />
      <CharmListRow charmsToShow={CHARMS.slice(10, 20)} />
      <CharmListRow charmsToShow={CHARMS.slice(20, 30)} />
      <CharmListRow charmsToShow={CHARMS.slice(30, 40)} />
    </section>
  );
};

export default CharmList;
