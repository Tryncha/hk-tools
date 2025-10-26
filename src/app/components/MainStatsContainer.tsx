'use client';

import Image from 'next/image';
import useLoadout from '../hooks';

const MainStatsContainer = () => {
  const { loadout } = useLoadout();
  const { health, soul } = loadout;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center">
        <div>
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
        <h3 className="text-center font-bold">SOUL STATS</h3>
        <hr className="my-2 border-gray-700" />
        <div className="flex justify-center gap-4">
          <div className="flex flex-col">
            <h4 className="text-center font-bold">MAX</h4>
            <hr className="mt-1 mb-2 border-gray-700" />
            <div>
              <output className="text-2xl">{soul.max.base}</output>
              <span className="ml-1 text-sm text-gray-400">BASE</span>
            </div>
            <div>
              <output className="text-2xl">{soul.max.perVessel * 3}</output>
              <span className="ml-1 text-sm text-gray-400">VESSELS</span>
            </div>
          </div>
          <div>
            <h4 className="text-center font-bold">SPELL</h4>
            <hr className="mt-1 mb-2 border-gray-700" />
            <output className="text-2xl">{soul.cost}</output>
            <span className="ml-1 text-sm text-gray-400">COST</span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-center font-bold">
              GAIN <span className="text-sm text-gray-500">/ per</span>
            </h4>
            <hr className="mt-1 mb-2 border-gray-700" />
            <div>
              <output className="text-2xl">{soul.gain.perAttack}</output>
              <span className="ml-1 text-sm text-gray-400">ATTACK</span>
            </div>
            {soul.gain.perHit > 0 && (
              <div>
                <output className="text-2xl">{soul.gain.perHit}</output>
                <span className="ml-1 text-sm text-gray-400">HIT</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainStatsContainer;
