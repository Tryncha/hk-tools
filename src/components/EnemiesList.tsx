'use client';

import { useState } from 'react';
import { ENEMIES } from '../data/enemies';
import { useStats } from '../hooks';
import { calculateHitsToKill, capitalizeText } from '../utils';
import Image from 'next/image';

const EnemiesList = () => {
  const { nailDamage } = useStats();
  const [search, setSearch] = useState('');
  const [filterByBoss, setFilterByBoss] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const filteredEnemiesByBoss = filterByBoss ? ENEMIES.filter((e) => e.type === 'boss') : ENEMIES;

  const filteredEnemiesByText = filteredEnemiesByBoss.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <div className="sticky inset-x-0 top-0 flex items-center gap-1 border-b border-gray-700 bg-gray-900 p-2">
        <div className="flex h-8 flex-1 justify-between border border-gray-700 pl-4">
          <input
            type="text"
            placeholder="Search for enemies..."
            value={search}
            onChange={handleChange}
            className="flex-1"
          />
          <button
            onClick={() => setSearch('')}
            className="mx-2 text-xl text-red-300 hover:cursor-pointer"
          >
            ×
          </button>
        </div>
        <button
          onClick={() => setFilterByBoss(!filterByBoss)}
          title={filterByBoss ? 'Show all' : 'Show only bosses'}
          className={`${filterByBoss ? 'bg-gray-500 hover:bg-gray-500' : 'hover:bg-gray-800'} size-8 border border-gray-700 transition-colors hover:cursor-pointer active:bg-gray-600`}
        >
          B
        </button>
        <span className="p-1 px-2 text-right text-sm text-gray-200">{filteredEnemiesByText.length} results</span>
      </div>
      {filteredEnemiesByText.map((e) => {
        const hitsToKill = calculateHitsToKill(e.id, nailDamage);

        return (
          <div
            key={e.id}
            className="flex w-full items-center gap-4 border-b border-gray-700 p-2 transition-colors hover:bg-gray-800"
          >
            <Image
              src={e.image.data}
              alt={e.name}
              width={e.image.width}
              height={e.image.height}
              className="size-13 object-contain"
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
                      className="size-5 object-contain"
                    />
                  )}
                </div>
                <p className="text-sm text-gray-400">{e.type !== 'normal' && capitalizeText(e.type)}</p>
              </div>
              {e.health !== Infinity ? (
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
              ) : (
                <div className="w-[150px] text-center text-gray-400">Unkillable</div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default EnemiesList;
