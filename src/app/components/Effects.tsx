'use client';

import React from 'react';
import useLoadout from '../hooks';
import { CHARMS } from '../data/charms';

const Effects = () => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  // Use of Set instead of Array for performance reasons.

  // Lookup:
  // Set.has() -> O(1)
  // Array.includes() -> O(n)

  // Addition:
  // Set.add() -> O(1)
  // Array.push() -> O(1), but becomes O(n) when using includes() first.

  // Uniqueness:
  // Set does not allow duplicates by definition

  // In this case, the performance difference is negligible, so using an Array works just as well,
  // but I prefer using Set since it feels like better practice when working with unique checks.

  const displayedSynergiesKeys = new Set<string>();

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
        // Array of all synergies for each charm
        c.synergies
          // Filter synergies that match loaded charms
          ?.filter((s) => charms.map((c) => c.id).includes(s.charmId))
          .map((s) => {
            const synergyCharm = CHARMS.find((sc) => sc.id === s.charmId);
            if (!synergyCharm) throw new Error('Charm not found');

            // Creation of a unique key that remains the same regardless of order
            const synergyKey = [c.id, s.charmId].sort().join('-');

            // Do not render anything if the key already exists
            if (displayedSynergiesKeys.has(synergyKey)) return null;

            // Otherwise, add it to the Set and render the synergy
            displayedSynergiesKeys.add(synergyKey);

            return (
              <div key={synergyKey}>
                <h3 className="font-bold">
                  {c.name} + {synergyCharm.name}
                </h3>
                <span>{s.effect}</span>
              </div>
            );
          })
      )}
    </div>
  );
};

export default Effects;
