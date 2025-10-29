'use client';

import { Spell } from '@/types';
import { ChangeEvent, useId, useState } from 'react';
import { useLoadout, useSpell } from '@/hooks';
import SpellContainer from './SpellContainer';

const SpellInfo = ({ spell, isSimplified }: { spell: Spell; isSimplified: boolean }) => {
  const { name } = spell;

  const { label, rawValue, extendedValue } = useSpell(spell);

  return (
    <div className="flex items-center gap-2">
      <SpellContainer
        spell={spell}
        isReadOnly
      />
      <div className="flex flex-col">
        <span className="text-base font-semibold">{name}</span>
        {isSimplified || <span className="text-sm">({label})</span>}
        <span className="text-2xl">
          {isSimplified ? rawValue : extendedValue}
          <span className="text-sm text-gray-400"> DMG</span>
        </span>
      </div>
    </div>
  );
};

const SpellStats = () => {
  const { loadout } = useLoadout();
  const { spells } = loadout;

  const checkboxId = useId();

  const [isSimplified, setIsSimplified] = useState(true);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setIsSimplified(e.target.checked);
  }

  return (
    <section className="relative flex flex-2 flex-col justify-center">
      {spells.map((s) => (
        <SpellInfo
          key={s.id}
          spell={s}
          isSimplified={isSimplified}
        />
      ))}
      <div className="absolute top-0 right-0 flex items-center gap-2">
        <label htmlFor={checkboxId}>Simplify</label>
        <input
          id={checkboxId}
          type="checkbox"
          checked={isSimplified}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default SpellStats;
