'use client';

import Image from 'next/image';
import useLoadout from '../hooks';

const MainStatsContainer = () => {
  const { loadout } = useLoadout();
  const { health, soul } = loadout;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="">
          <output className="text-2xl">{health}</output>
          <span className="ml-1 text-sm text-gray-400">MASKS</span>
        </div>
        <div className="flex">
          {Array.from({ length: health }).map((_, i) => (
            <Image
              key={i}
              src="/ui/mask.png"
              alt="Mask Shard"
              width={25}
              height={25}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-center font-bold">SOUL</h3>
        <hr className="my-2 border-gray-700" />
        <div className="flex justify-center gap-4">
          <div>
            <output className="text-2xl">{soul.max}</output>
            <span className="ml-1 text-sm text-gray-400">MAX</span>
          </div>
          <div>
            <output className="text-2xl">{soul.cost}</output>
            <span className="ml-1 text-sm text-gray-400">COST</span>
          </div>
          <div>
            <output className="text-2xl">{soul.regen}</output>
            <span className="ml-1 text-sm text-gray-400">GAIN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStatsContainer;
