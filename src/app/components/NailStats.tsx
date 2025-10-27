'use client';

import { useCharmCheck, useLoadout } from '../hooks';
import { SWING_SPEED } from '../constants';
import { calculateDPS } from '../utils';
import NailContainer from './NailContainer';

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

const NailStats = () => {
  const { loadout } = useLoadout();
  const { nail, isLowHealth } = loadout;

  const hasUnbreakableStrength = useCharmCheck('unbreakable-strength');
  const hasQuickSlash = useCharmCheck('quick-slash');
  const hasFuryOfTheFallen = useCharmCheck('fury-of-the-fallen');

  const nailDamage = nail.damage * (hasUnbreakableStrength ? 1.5 : 1) * (hasFuryOfTheFallen && isLowHealth ? 1.75 : 1);

  return (
    <div className="flex items-center gap-4">
      <NailContainer
        nail={nail}
        isReadOnly
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
          output={`${(SWING_SPEED - SWING_SPEED * (hasQuickSlash ? 0.39 : 0)).toFixed(2)}s`}
        />
      </div>
    </div>
  );
};

export default NailStats;
