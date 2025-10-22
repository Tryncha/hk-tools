'use client';

import Image from 'next/image';
import { MAX_NOTCHES } from '../constants';
import useLoadout from '../hooks';

const NotchesContainer = () => {
  const { loadout } = useLoadout();
  const { notchesUsed, isOvercharmed } = loadout;

  const notchesOff = MAX_NOTCHES - notchesUsed;
  const notchesOn = notchesUsed > MAX_NOTCHES ? MAX_NOTCHES : notchesUsed;
  const notchesOvercharmed = notchesUsed - MAX_NOTCHES;

  return (
    <>
      <h2>Notches</h2>
      <div className="flex">
        {Array.from({ length: notchesOn }, (_, i) => (
          <Image
            key={i}
            src="/ui/notch-cost-on.png"
            alt="Notch Cost On"
            width={50}
            height={50}
          />
        ))}
        {Array.from({ length: notchesOff }, (_, i) => (
          <Image
            key={i}
            src="/ui/notch-cost-off.png"
            alt="Notch Cost Off"
            width={50}
            height={50}
          />
        ))}
        {isOvercharmed &&
          Array.from({ length: notchesOvercharmed }, (_, i) => (
            <Image
              key={i}
              src="/ui/notch-cost-overcharmed.png"
              alt="Notch Cost Overcharmed"
              width={50}
              height={50}
            />
          ))}
      </div>
    </>
  );
};

export default NotchesContainer;
