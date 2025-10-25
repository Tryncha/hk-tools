'use client';

import React, { useState } from 'react';
import useLoadout from '../hooks';
import Image from 'next/image';
import { NotchesOn } from './Notches';
import { SYNERGIES } from '../data/synergies';
import { getCharmData } from '../utils';

const Effects = () => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  const [isOpen, setIsOpen] = useState(true);

  const activeSynergies = SYNERGIES.filter((s) => s.charmIds.every((id) => charms.map((c) => c.id).includes(id)));

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? '-translate-x-160' : '-translate-x-2'} fixed top-1/2 right-0 h-12 w-8 -translate-y-1/2 border-y border-l border-gray-700 transition-transform duration-1000 ease-in-out hover:cursor-pointer`}
      >
        {isOpen ? '->' : '<-'}
      </button>
      <section
        className={`${isOpen ? 'translate-x-0' : 'translate-x-158'} fixed right-0 h-full w-160 overflow-y-auto border-l border-gray-700 pl-2 transition-transform duration-1000 ease-in-out`}
      >
        <div className="flex min-h-screen flex-col justify-center gap-2">
          <section className="flex flex-col gap-2 border border-gray-700 bg-gray-900 p-4">
            {charms.map((c) => (
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
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <ul className="ml-10 list-disc">
                    {c.effects.map((e) => (
                      <li key={`${c.id}-${e}`}>{e}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </section>
          {activeSynergies.length > 0 && (
            <section className="flex flex-col gap-4 border border-gray-700 bg-gray-900 p-4">
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
                          <div className="flex">
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
                          <div className="flex">
                            <NotchesOn
                              quantity={secondCharm.notchCost}
                              size={30}
                            />
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
      </section>
    </>
  );
};

export default Effects;
