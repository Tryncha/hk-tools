'use client';

import Image from 'next/image';
import { useCharmCheck, useHealth, useLoadout, useSoul } from '../hooks';
import { useId } from 'react';

const MainStatsContainer = () => {
  const checkboxId = useId();

  const { loadout, toggleLowHealth } = useLoadout();
  const { isLowHealth } = loadout;

  const { maxHealth } = useHealth();
  const { maxSoul, soulCost, soulGain } = useSoul();

  const hasFuryOfTheFallen = useCharmCheck('fury-of-the-fallen');

  return (
    <div className="flex flex-col gap-4">
      <div className="relative flex flex-col">
        <div className="absolute top-0 right-0 flex items-center gap-2">
          <label htmlFor={checkboxId}>Low Health?</label>
          <input
            id={checkboxId}
            type="checkbox"
            checked={isLowHealth}
            onChange={toggleLowHealth}
          />
        </div>
        <div>
          <output className="ml-1 text-2xl">{isLowHealth ? `1/${maxHealth}` : maxHealth}</output>
          <span className="ml-1 text-sm text-gray-400">MASKS</span>
        </div>
        <div className="flex">
          {Array.from({ length: isLowHealth ? 1 : maxHealth }).map((_, i) => (
            <Image
              key={i}
              src="/ui/mask.png"
              alt="Mask Shard"
              width={25}
              height={36}
              className={`${hasFuryOfTheFallen && isLowHealth && 'drop-shadow-charm drop-shadow-red-600'} h-9 w-[25px]`}
            />
          ))}
          {isLowHealth &&
            Array.from({ length: maxHealth - 1 }).map((_, i) => (
              <Image
                key={i}
                src="/ui/mask.png"
                alt="Mask Shard"
                width={25}
                height={36}
                className="h-9 w-[25px] opacity-30"
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
              <output className="text-2xl">{maxSoul.base}</output>
              <span className="ml-1 text-sm text-gray-400">BASE</span>
            </div>
            <div>
              <output className="text-2xl">{maxSoul.perVessel * 3}</output>
              <span className="ml-1 text-sm text-gray-400">VESSELS</span>
            </div>
          </div>
          <div>
            <h4 className="text-center font-bold">SPELL</h4>
            <hr className="mt-1 mb-2 border-gray-700" />
            <output className="text-2xl">{soulCost}</output>
            <span className="ml-1 text-sm text-gray-400">COST</span>
          </div>
          <div className="flex flex-col">
            <h4 className="text-center font-bold">
              GAIN <span className="text-sm text-gray-500">/ per</span>
            </h4>
            <hr className="mt-1 mb-2 border-gray-700" />
            <div>
              <output className="text-2xl">{soulGain.perAttack}</output>
              <span className="ml-1 text-sm text-gray-400">ATTACK</span>
            </div>
            {soulGain.perHit !== 0 && (
              <div>
                <output className="text-2xl">{soulGain.perHit}</output>
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
