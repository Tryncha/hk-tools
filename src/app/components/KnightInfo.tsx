import NailStats from './NailStats';
import NailArtsContainer from './NailsArtsContainer';
import SpellsContainer from './SpellStats';
import MainStatsContainer from './MainStats';

const KnightInfo = () => {
  return (
    <section className="flex flex-col gap-2 px-4">
      <div className="flex justify-between">
        <MainStatsContainer />
        <div className="flex gap-2">
          <NailStats />
          <NailArtsContainer />
        </div>
      </div>
      <hr className="border-gray-700" />
      <SpellsContainer />
    </section>
  );
};

export default KnightInfo;
