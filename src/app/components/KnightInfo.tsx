import NailInfo from './NailInfo';
import NailArtsContainer from './NailsArtsContainer';
import SpellsContainer from './SpellsContainer';

const KnightInfo = () => {
  return (
    <section className="relative flex gap-4">
      <NailInfo />
      <NailArtsContainer />
      <SpellsContainer />
    </section>
  );
};

export default KnightInfo;
