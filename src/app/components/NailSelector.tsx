import { NAILS } from '../data/nails';
import NailContainer from './NailContainer';

const NailSelector = () => {
  return (
    <section className="flex justify-center py-4">
      {NAILS.map((n) => (
        <NailContainer
          key={n.id}
          nail={n}
        />
      ))}
    </section>
  );
};

export default NailSelector;
