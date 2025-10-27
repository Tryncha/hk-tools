'use client';

import Image from 'next/image';
import { Spell } from '../types.d';
import { ChangeEvent, useId, useState } from 'react';
import { useLoadout, useSpell } from '../hooks';

interface SpellInfoProps {
  spell: Spell;
  isSimplified: boolean;
}

const SpellInfo = ({ spell, isSimplified }: SpellInfoProps) => {
  const { name, image } = spell;

  const { label, rawValue, extendedValue } = useSpell(spell);

  return (
    <div className="flex h-20 items-center gap-4">
      <Image
        src={image.data}
        alt={name}
        width={image.width}
        height={image.height}
        className="h-16 w-18 object-contain"
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
    <div className="relative flex flex-col gap-2">
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
