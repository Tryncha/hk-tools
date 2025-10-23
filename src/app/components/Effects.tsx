'use client';

import useLoadout from '../hooks';

const Effects = () => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  return (
    <div className="flex h-fit w-160 bg-gray-800 p-4">
      <ul className="ml-8 list-disc">{charms.map((c) => c.effects.map((e) => <li key={`${c.id}-${e}`}>{e}</li>))}</ul>
    </div>
  );
};

export default Effects;
