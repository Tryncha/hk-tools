import NailContainer from './NailContainer';
import NailArtsContainer from './NailsArtsContainer';
import SpellsContainer from './SpellsContainer';
import MainStatsContainer from './MainStatsContainer';

const KnightInfo = () => {
  return (
    <section className="flex flex-col gap-2 px-4">
      <div className="flex justify-between">
        <MainStatsContainer />
        <div className="flex gap-2">
          <NailContainer />
          <NailArtsContainer />
        </div>
      </div>
      <hr className="border-gray-700" />
      <SpellsContainer />
    </section>
  );
};

export default KnightInfo;
