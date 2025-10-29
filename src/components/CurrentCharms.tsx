'use client';

import Image from 'next/image';
import { useLoadout } from '@/hooks';
import CharmContainer from './CharmContainer';
import { MAX_NOTCHES } from '@/constants';
import ResetButton from './ResetButton';

const CurrentCharms = () => {
  const { loadout, resetCharms, resetLoadout } = useLoadout();
  const { notchesUsed, charms, isOvercharmed } = loadout;

  const notchesOff = MAX_NOTCHES - notchesUsed;
  const notchesOn = notchesUsed > MAX_NOTCHES ? MAX_NOTCHES : notchesUsed;
  const notchesOvercharmed = notchesUsed - MAX_NOTCHES;

  return (
    <section className="flex justify-between gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold">Equipped</h2>
          <div className="flex items-center gap-2">
            {charms.map((c) => (
              <CharmContainer
                key={c.id}
                charm={c}
                isReadOnly
              />
            ))}
            {notchesUsed < MAX_NOTCHES && (
              <div className="flex size-18 items-center justify-center">
                <Image
                  src="/hollow-knight/ui/notch.png"
                  alt="Notch"
                  width={36}
                  height={36}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">Notches</h3>
          <div className="flex">
            {Array.from({ length: notchesOn }, (_, i) => (
              <Image
                key={i}
                src="/hollow-knight/ui/notch-cost-on.png"
                alt="Notch Cost On"
                width={50}
                height={50}
              />
            ))}
            {Array.from({ length: notchesOff }, (_, i) => (
              <Image
                key={i}
                src="/hollow-knight/ui/notch-cost-off.png"
                alt="Notch Cost Off"
                width={50}
                height={50}
              />
            ))}
            {isOvercharmed &&
              Array.from({ length: notchesOvercharmed }, (_, i) => (
                <Image
                  key={i}
                  src="/hollow-knight/ui/notch-cost-overcharmed.png"
                  alt="Notch Cost Overcharmed"
                  width={50}
                  height={50}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <ResetButton onClick={resetCharms}>Reset Charms</ResetButton>
        <ResetButton onClick={resetLoadout}>Reset All</ResetButton>
      </div>
    </section>
  );
};

export default CurrentCharms;
