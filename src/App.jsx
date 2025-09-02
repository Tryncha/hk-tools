import CharmsContainer from './components/CharmsContainer/CharmsContainer';
import NailsContainer from './components/NailsContainer/NailsContainer';
import { MAX_NOTCHES } from './constants';
import { useLoadout } from './hooks/useLoadout';

const CurrentCharms = () => {
  const { loadout } = useLoadout();
  const { nailLevel, notchesUsed, isOvercharmed, charms } = loadout;

  const notchesOff = MAX_NOTCHES - notchesUsed;
  const notchesOn = notchesUsed > MAX_NOTCHES ? MAX_NOTCHES : notchesUsed;
  const notchesOvercharmed = notchesUsed - MAX_NOTCHES;

  return (
    <section className="CurrentCharms">
      <h2>
        Equipped - Nail Level: {nailLevel} - Notches Used: {notchesUsed} - {isOvercharmed ? 'Overcharmed' : 'OK'}
      </h2>
      <div>
        {charms.map((charm) => (
          <img
            key={charm.id}
            src={`charms/${charm.name}.png`}
            alt={charm.name}
            title={charm.description}
          />
        ))}
        {notchesUsed < MAX_NOTCHES ? (
          <img
            src="ui/notch.png"
            alt="Notch"
            title="Notch"
          />
        ) : null}
      </div>
      <div>
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

const App = () => {
  return (
    <main>
      <CurrentCharms />
      <hr />
      <CharmsContainer />
      <NailsContainer />
    </main>
  );
};

export default App;
