'use client';

import Image from 'next/image';
import useLoadout from '../hooks';
import CharmContainer from './CharmContainer';
import { MAX_NOTCHES } from '../constants';

const CurrentCharms = () => {
  const { loadout, resetCharms, resetLoadout } = useLoadout();
  const { notchesUsed, charms } = loadout;

  return (
    <>
      <h2>Equipped</h2>
      <div className="flex items-center gap-1">
        {charms.map((c) => (
          <CharmContainer
            key={c.id}
            charm={c}
          />
        ))}
        {notchesUsed < MAX_NOTCHES && (
          <Image
            src="/ui/notch.png"
            alt="Notch"
            width={50}
            height={50}
            title="Notch"
            className="CurrentCharms-notch"
          />
        )}
        <button
          className="ResetButton"
          onClick={resetCharms}
        >
          Reset Charms
        </button>
        <button
          className="ResetButton"
          onClick={resetLoadout}
        >
          Reset All
        </button>
      </div>
    </>
  );
};

export default CurrentCharms;
