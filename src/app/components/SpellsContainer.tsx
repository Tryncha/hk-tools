'use client';

import Image from 'next/image';
import { Spell } from '../types.d';
import { ChangeEvent, useId, useState } from 'react';
import { getSpellInfo } from '../utils';
import useLoadout from '../hooks';

interface SpellInfoProps {
  spell: Spell;
  isSimplified: boolean;
}

const SpellInfo = ({ spell, isSimplified }: SpellInfoProps) => {
  const { name, imgSrc } = spell;

  const { label, rawValue, extendedValue } = getSpellInfo(spell);

  return (
    <div className="flex items-center gap-2">
      <Image
        width={70}
        height={70}
        src={imgSrc}
        alt={name}
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

const SpellsContainer = () => {
  const { loadout } = useLoadout();
  const { spells } = loadout;

  const checkboxId = useId();

  const [isSimplified, setIsSimplified] = useState(true);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setIsSimplified(e.target.checked);
  }

  return (
    <div className="flex flex-col gap-2">
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
    </div>
  );
};

export default SpellsContainer;
