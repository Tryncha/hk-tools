import type { Charm } from '../types';
import CharmContainer from './CharmContainer';
import { CHARMS } from '../data/charms';

const CharmListRow = ({ charmsToShow }: { charmsToShow: Charm[] }) => {
  return (
    <div className="flex odd:mr-10 even:ml-10">
      {charmsToShow.map((c) => (
        <CharmContainer
          key={c.id}
          charm={c}
        />
      ))}
    </div>
  );
};

const CharmSelector = () => {
  return (
    <section className="flex flex-col items-center py-2">
      <CharmListRow charmsToShow={CHARMS.slice(0, 10)} />
      <CharmListRow charmsToShow={CHARMS.slice(10, 20)} />
      <CharmListRow charmsToShow={CHARMS.slice(20, 30)} />
      <CharmListRow charmsToShow={CHARMS.slice(30, 40)} />
    </section>
  );
};

export default CharmSelector;
