import NailContainer from './NailContainer';
import NailArtsContainer from './NailsArtsContainer';
import SpellsContainer from './SpellsContainer';

const KnightInfo = () => {
  return (
    <section className="relative flex gap-4">
      <NailContainer />
      <NailArtsContainer />
      <SpellsContainer />
    </section>
  );
};

export default KnightInfo;
