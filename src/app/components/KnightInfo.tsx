import NailContainer from './NailContainer';
import NailArtsContainer from './NailsArtsContainer';
import SpellsContainer from './SpellsContainer';
import MainStatsContainer from './MainStatsContainer';

const KnightInfo = () => {
  return (
    <section className="flex flex-col gap-2 px-4">
      <div className="flex justify-between">
        <div className="flex flex-col py-2">
          <h2 className="text-center text-2xl font-bold">Knight</h2>
          <hr className="my-2 border-gray-700" />
          <MainStatsContainer />
        </div>
        <div className="flex flex-col py-2">
          <h2 className="text-center text-2xl font-bold">Nail</h2>
          <hr className="my-2 border-gray-700" />
          <div className="flex justify-center gap-4">
            <NailContainer />
            <NailArtsContainer />
          </div>
        </div>
      </div>
      <hr className="border-gray-700" />
      <div>
        <h2 className="text-center text-2xl font-bold">Spells</h2>
        <hr className="my-2 border-gray-700" />
        <SpellsContainer />
      </div>
    </section>
  );
};

export default KnightInfo;
