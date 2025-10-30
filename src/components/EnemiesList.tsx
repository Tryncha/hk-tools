'use client';

import { useState } from 'react';
import { ENEMIES } from '../data/enemies';
import { useStats } from '../hooks';
import { calculateHitsToKill, capitalizeText } from '../utils';
import Image from 'next/image';

const EnemiesList = () => {
  const { nailDamage } = useStats();
  const [search, setSearch] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const filteredEnemies = ENEMIES.filter((e) => e.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="pb-20">
      <div className="w-full p-2">
        <input
          type="text"
          className="w-full border border-gray-700 px-4 py-1"
          placeholder="Search for enemies..."
          value={search}
          onChange={handleChange}
        />
      </div>
      {filteredEnemies.map((e) => {
        const hitsToKill = calculateHitsToKill(e.id, nailDamage);

        return (
          <div
            key={e.id}
            className="flex w-full items-center gap-4 border-b border-gray-700 p-4 transition-colors hover:bg-gray-800"
          >
            <Image
              src={e.image.data}
              alt={e.name}
              width={e.image.width}
              height={e.image.height}
            />
            <div className="flex flex-1 items-center justify-between">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-nowrap">{e.name}</h3>
                  {e.content !== 'main-game' && (
                    <Image
                      src={`/hollow-knight/contents/${e.content}.png`}
                      alt={`${e.content}-icon`}
                      width={20}
                      height={20}
                    />
                  )}
                </div>
                <p className="text-sm text-gray-400">{e.type !== 'normal' && capitalizeText(e.type)}</p>
              </div>
              <div className="flex gap-2 text-center">
                <span className="w-16 flex-1">
                  <span className="text-lg">{e.health}</span>
                  <span className="ml-1 text-sm text-gray-400">HP</span>
                </span>
                <span className="text-lg text-gray-400">|</span>
                <span className="w-16 flex-1">
                  <span className="text-lg">{hitsToKill}</span>
                  <span className="ml-1 text-sm text-gray-400">{hitsToKill > 1 ? 'HITS' : 'HIT'}</span>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EnemiesList;
