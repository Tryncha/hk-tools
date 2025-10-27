'use client';

import Image from 'next/image';
import { useCharmCheck, useLoadout } from '../hooks';
import { SWING_SPEED } from '../constants';
import { calculateDPS } from '../utils';

interface OutputLabelProps {
  label: string;
  output: string;
}

const OutputLabel = ({ label, output }: OutputLabelProps) => {
  return (
    <div className="flex flex-col">
      <span className="text-base font-semibold">{label}</span>
      <output className="text-3xl">{output}</output>
    </div>
  );
};

const NailContainer = () => {
  const { loadout } = useLoadout();
  const { nail, charms } = loadout;

  const charmIds = charms.map((c) => c.id);
  const hasUnbreakableStrength = charmIds.includes('unbreakable-strength');

  const hasQuickSlash = useCharmCheck('quick-slash');

  const nailDamage = nail.damage * (hasUnbreakableStrength ? 1.5 : 1);

  return (
    <div className="flex items-center gap-4">
      <Image
        src={nail.image.data}
        alt={nail.name}
        width={nail.image.width}
        height={nail.image.height}
      />
      <div className="flex flex-col gap-2">
        <OutputLabel
          label="Base"
          output={`${nailDamage}`}
        />
        <OutputLabel
          label="DPS"
          output={`${calculateDPS(nailDamage, hasQuickSlash)}`}
        />
        <OutputLabel
          label="Swing Speed"
          output={`${(SWING_SPEED - SWING_SPEED * (0.39 * (hasQuickSlash ? 1 : 0))).toFixed(2)}s`}
        />
      </div>
    </div>
  );
};

export default NailContainer;
