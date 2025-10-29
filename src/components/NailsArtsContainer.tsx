'use client';

import Image from 'next/image';
import nailArts from '@/data/nailArts.json';
import { useLoadout, useNailArt } from '@/hooks';
import { NailArt } from '@/types';

const NailArtInfo = ({ nailArt }: { nailArt: NailArt }) => {
  const { loadout } = useLoadout();
  const { nail } = loadout;

  const { name, imgSrc } = nailArt;
  const { label, value } = useNailArt(nailArt, nail.level);

  return (
    <div className="flex gap-2">
      <Image
        src={imgSrc}
        alt={name}
        width={60}
        height={60}
        className="size-15"
      />
      <div className="flex flex-col justify-center">
        <h3 className="text-base font-semibold">{label}</h3>
        <div>
          <span className="text-2xl">{value}</span>
          <span className="text-sm text-gray-400"> DMG</span>
        </div>
      </div>
    </div>
  );
};

const NailArtsStats = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      {nailArts.map((a) => (
        <NailArtInfo
          key={a.id}
          nailArt={a}
        />
      ))}
    </div>
  );
};

export default NailArtsStats;
