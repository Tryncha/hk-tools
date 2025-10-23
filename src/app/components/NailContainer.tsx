'use client';

import Image from 'next/image';
import useLoadout from '../hooks';
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
  const { nail } = loadout;

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
          output={`${nail.damage}`}
        />
        <OutputLabel
          label="DPS"
          output={`${calculateDPS(nail.damage, false)}`}
        />
        <OutputLabel
          label="Swing Speed"
          output={` ${SWING_SPEED}s`}
        />
      </div>
    </div>
  );
};

export default NailContainer;
