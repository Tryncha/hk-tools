import NailStats from './NailStats';
import NailArtsStats from './NailsArtsContainer';
import SpellStats from './SpellStats';
import MainStats from './MainStats';
import MinionStats from './MinionStats';

const KnightStats = () => {
  return (
    <section className="flex flex-col gap-2 px-4">
      <div className="flex justify-between">
        <MainStats />
        <div className="flex gap-2">
          <NailStats />
          <NailArtsStats />
        </div>
      </div>
      <hr className="border-gray-700" />
      <div className="flex justify-between gap-4">
        <SpellStats />
        <MinionStats />
      </div>
    </section>
  );
};

export default KnightStats;
