'use client';

import React from 'react';
import useLoadout from '../hooks';
import { CHARMS } from '../data/charms';

const Effects = () => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  return (
    <div className="flex h-fit w-160 flex-col gap-2 bg-gray-800 p-4">
      {charms.map((c) => (
        <div key={c.id}>
          <h3 className="font-bold">{c.name}</h3>
          <ul className="ml-4 list-disc">
            {c.effects.map((e) => (
              <li key={`${c.id}-${e}`}>{e}</li>
            ))}
          </ul>
        </div>
      ))}
      <hr className="my-2" />
      {charms.map((c) =>
        c.synergies?.map((s) => {
          const synergyCharm = CHARMS.find((c) => c.id === s.charmId);
          if (!synergyCharm) throw new Error('Charm not found');

          return (
            charms.map((c) => c.id).includes(s.charmId) && (
              <div key={s.charmId}>
                <h3 className="font-bold">
                  {c.name} + {synergyCharm.name}
                </h3>
                <span key={`${c.id}-${s}`}>{s.effect}</span>
              </div>
            )
          );
        })
      )}
    </div>
  );
};

export default Effects;
