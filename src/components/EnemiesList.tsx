'use client';

import { useStats } from '@/hooks';
import Image from 'next/image';

enum DLC {
  MAIN_GAME = 'main-game',
  HIDDEN_DREAMS = 'hidden-dreams',
  GRIMM_TROUPE = 'grimm-troupe',
  LIFEBLOOD = 'lifeblood',
  GODMASTER = 'godmaster'
}

const ENEMIES = [
  {
    id: 'crawlid',
    name: 'Crawlid',
    health: 8,
    content: DLC.MAIN_GAME,
    location: ['Forgotten Crossroads', 'Howling Cliffs', "King's Pass", 'Greenpath', 'Blue Lake (1)'],
    image: {
      data: '/hollow-knight/enemies/crawlid.png',
      width: 60,
      height: 60
    }
  }
];

function calculateHitCount(enemyId: string, nailDamage: number) {
  const enemyToCalculate = ENEMIES.find((e) => e.id === enemyId);

  if (!enemyToCalculate) throw new Error(`Enemy with id ${enemyId} not found...`);

  const hitsToKill = Math.ceil(enemyToCalculate.health / nailDamage);

  return hitsToKill;
}

const EnemiesList = () => {
  const { nailDamage } = useStats();

  return (
    <div>
      {ENEMIES.map((e) => {
        const hitsToKill = calculateHitCount(e.id, nailDamage);

        return (
          <div
            key={e.id}
            className="flex items-center gap-4 border-b border-gray-700 p-4 hover:bg-gray-800"
          >
            <Image
              src={e.image.data}
              alt={e.name}
              width={e.image.width}
              height={e.image.height}
            />
            <div className="flex w-full justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold">{e.name}</h3>{' '}
                {e.content !== DLC.MAIN_GAME && (
                  <Image
                    src={`/hollow-knight/contents/${e.content}.png`}
                    alt={`${e.content}-icon`}
                    width={20}
                    height={20}
                  />
                )}
                {/* <p className="overflow-auto text-sm">{e.location.join(', ')}</p> */}
              </div>
              <div>
                <span>
                  <span className="text-2xl">{e.health}</span>
                  <span className="ml-1 text-sm text-gray-400">HP</span>
                </span>
                <span className="text-2xl text-gray-400"> | </span>
                <span>
                  <span className="text-2xl">{hitsToKill}</span>
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
