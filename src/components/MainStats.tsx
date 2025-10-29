'use client';

import Image from 'next/image';
import { useCharmCheck, useHealth, useLoadout, useSoul } from '@/hooks';
import { useId } from 'react';

const MainStats = () => {
  const checkboxId = useId();

  const { loadout, toggleLowHealth } = useLoadout();
  const { isLowHealth } = loadout;

  const { maxHealth, lifebloodMasks } = useHealth();
  const { maxSoul, soulCost, soulGain } = useSoul();

  const hasFuryOfTheFallen = useCharmCheck('fury-of-the-fallen');
  const hasJonisBlessing = useCharmCheck('jonis-blessing');

  return (
    <div className="flex flex-col gap-4">
      <div className="item flex flex-col">
        <div className="flex items-center justify-end gap-2">
          <label htmlFor={checkboxId}>Low Health?</label>
          <input
            id={checkboxId}
            type="checkbox"
            checked={isLowHealth}
            onChange={toggleLowHealth}
          />
        </div>
        <div>
          {!hasJonisBlessing && (
            <span>
              <output className="ml-1 text-2xl">{isLowHealth ? 1 : maxHealth}</output>
              <span className="ml-1 text-sm text-gray-400">{isLowHealth ? 'MASK' : 'MASKS'}</span>
            </span>
          )}
          {lifebloodMasks > 0 && (
            <span className="text-cyan-600">
              <output className="ml-1 text-2xl">
                {!hasJonisBlessing ? ' + ' : ''}
                {lifebloodMasks}
              </output>
              <span className="ml-1 text-sm">LIFEBLOOD</span>
            </span>
          )}
        </div>
        <div className="flex w-75 flex-wrap">
          {hasJonisBlessing
            ? Array.from({ length: isLowHealth ? 1 : maxHealth }).map((_, i) => (
                <Image
                  key={i}
                  src="/ui/lifeblood-mask.png"
                  alt="Lifeblood Mask"
                  width={25}
                  height={36}
                  className={`${hasFuryOfTheFallen && isLowHealth && 'drop-shadow-charm drop-shadow-red-600'} -mt-1 h-10 w-[25px] object-cover`}
                />
              ))
            : Array.from({ length: isLowHealth ? 1 : maxHealth }).map((_, i) => (
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
          {isLowHealth &&
            Array.from({ length: lifebloodMasks - 1 }).map((_, i) => (
              <Image
                key={i}
                src="/ui/lifeblood-mask.png"
                alt="Lifeblood Mask"
                width={25}
                height={36}
                className="-mt-1 h-10 w-[25px] object-cover opacity-30"
              />
            ))}
          {!isLowHealth &&
            Array.from({ length: lifebloodMasks }).map((_, i) => (
              <Image
                key={i}
                src="/ui/lifeblood-mask.png"
                alt="Lifeblood Mask"
                width={25}
                height={36}
                className="-mt-1 h-10 w-[25px] object-cover"
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

export default MainStats;
