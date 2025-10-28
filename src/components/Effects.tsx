'use client';

import React from 'react';
import { useLoadout } from '@/hooks';
import Image from 'next/image';
import { NotchesOn } from './Notches';
import { SYNERGIES } from '@/data/synergies';
import { getCharmData } from '@/utils';
import MarkdownImageInline from './MarkdownImageInline';

const Effects = () => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  const activeSynergies = SYNERGIES.filter((s) => s.charmIds.every((id) => charms.map((c) => c.id).includes(id)));

  return (
    <div className="flex min-h-screen flex-col gap-2">
      {charms.filter((c) => c.id !== 'void-heart').length > 0 && (
        <section className="flex flex-col gap-2 border border-gray-700 bg-gray-900 p-4">
          <h2 className="text-center text-xl font-bold">Charms Effects</h2>
          <hr className="mb-2 border-gray-700" />
          {charms
            .filter((c) => c.id !== 'void-heart')
            .map((c) => (
              <div
                key={c.id}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={c.image}
                    alt={c.name}
                    width={50}
                    height={50}
                  />
                  <div className="flex items-center">
                    <h3 className="mx-2 font-bold">{c.name}</h3>
                    <NotchesOn
                      quantity={c.notchCost}
                      size={30}
                    />
                    {c.notchCost > 0 && (
                      <div className="font-bold">
                        <span className="mx-2">|</span>
                        <span>{c.notchCost}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <ul className="ml-10 list-disc">
                    {c.effects.map((e) => (
                      <li key={`${c.id}-${e}`}>
                        <MarkdownImageInline imageSize={16}>{e}</MarkdownImageInline>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </section>
      )}
      {activeSynergies.length > 0 && (
        <section className="flex flex-col gap-4 border border-gray-700 bg-gray-900 p-4">
          <h2 className="text-center text-xl font-bold">Synergies</h2>
          <hr className="mb-2 border-gray-700" />
          {activeSynergies.map((s) => {
            const firstCharm = getCharmData(s.charmIds[0]);
            const secondCharm = getCharmData(s.charmIds[1]);

            return (
              <div
                key={s.id}
                className="flex flex-col gap-2"
              >
                <div className="flex items-center justify-evenly gap-2">
                  <Image
                    src={firstCharm.image}
                    alt={firstCharm.name}
                    width={50}
                    height={50}
                  />

                  <div className="grid grid-cols-[1fr_30px_1fr] grid-rows-1">
                    <div className="flex flex-col items-end">
                      <h3 className="mr-1 font-bold">{firstCharm.name}</h3>
                      <div className="flex items-center">
                        {firstCharm.notchCost > 0 && (
                          <div className="font-bold">
                            <span>{firstCharm.notchCost}</span>
                            <span className="mx-2">|</span>
                          </div>
                        )}
                        <NotchesOn
                          quantity={firstCharm.notchCost}
                          size={30}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="mx-1 mb-0.5 flex font-bold">+</span>
                      <span className="mx-1 mb-0.5 flex font-bold">+</span>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="ml-1 font-bold">{secondCharm.name}</h3>
                      <div className="flex items-center">
                        <NotchesOn
                          quantity={secondCharm.notchCost}
                          size={30}
                        />
                        {secondCharm.notchCost > 0 && (
                          <div className="font-bold">
                            <span className="mx-2">|</span>
                            <span>{secondCharm.notchCost}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Image
                    src={secondCharm.image}
                    alt={secondCharm.name}
                    width={50}
                    height={50}
                  />
                </div>
                <div className="ml-2 flex flex-col gap-1">
                  <ul className="ml-6 list-disc">
                    <li>{s.effect}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Effects;
