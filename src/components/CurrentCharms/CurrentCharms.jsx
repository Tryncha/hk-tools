import { MAX_NOTCHES } from '../../constants';
import { useLoadout } from '../../hooks/useLoadout';
import Charm from '../Charm/Charm';
import './CurrentCharms.css';

const CurrentCharms = () => {
  const { loadout } = useLoadout();
  const { notchesUsed, isOvercharmed, charms } = loadout;

  const notchesOff = MAX_NOTCHES - notchesUsed;
  const notchesOn = notchesUsed > MAX_NOTCHES ? MAX_NOTCHES : notchesUsed;
  const notchesOvercharmed = notchesUsed - MAX_NOTCHES;

  return (
    <section className="CurrentCharms">
      <h2>Equipped</h2>
      <div className="CurrentCharms-equipped">
        {charms.map((charmObj) => (
          <Charm
            key={charmObj.id}
            charmObj={charmObj}
          />
        ))}
        {notchesUsed < MAX_NOTCHES ? (
          <img
            className="CurrentCharms-notch"
            src="ui/notch.png"
            alt="Notch"
            title="Notch"
          />
        ) : null}
      </div>
      <h2>Notches</h2>
      <div className="CurrentCharms-notchCosts">
        {Array.from({ length: notchesOn }, (_, i) => (
          <img
            key={i}
            src="ui/notch-cost-on.png"
            alt="Notch Cost On"
          />
        ))}
        {Array.from({ length: notchesOff }, (_, i) => (
          <img
            key={i}
            src="ui/notch-cost-off.png"
            alt="Notch Cost Off"
          />
        ))}
        {isOvercharmed
          ? Array.from({ length: notchesOvercharmed }, (_, i) => (
              <img
                key={i}
                src="ui/notch-cost-overcharmed.png"
                alt="Notch Cost Overcharmed"
              />
            ))
          : null}
      </div>
    </section>
  );
};

export default CurrentCharms;
