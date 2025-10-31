import Image from 'next/image';
import { useLoadout } from '../hooks';
import CharmContainer from './CharmContainer';
import ResetButton from './ResetButton';
import { MAX_NOTCHES } from '../constants';
import { NotchesOff, NotchesOn, NotchesOvercharmed } from './Notches';

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
            <NotchesOn
              quantity={notchesOn}
              size={50}
            />
            <NotchesOff
              quantity={notchesOff}
              size={50}
            />
            {isOvercharmed && (
              <NotchesOvercharmed
                quantity={notchesOvercharmed}
                size={50}
              />
            )}
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
