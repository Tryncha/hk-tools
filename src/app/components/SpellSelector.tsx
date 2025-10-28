import { SPELLS } from '../data/spells';
import SpellContainer from './SpellContainer';

const SpellSelector = () => {
  return (
    <section className="flex justify-center py-4">
      <div className="grid grid-cols-3 grid-rows-2">
        {SPELLS.slice(0, 6).map((s) => (
          <SpellContainer
            key={s.id}
            spell={s}
          />
        ))}
      </div>
    </section>
  );
};

export default SpellSelector;
