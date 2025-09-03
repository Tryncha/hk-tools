import { SWING_SPEED } from '../../constants';
import { nailArtsData } from '../../constants/nailArtsData';
import { useLoadout } from '../../hooks/useLoadout';
import { calculateDPS, capitalizeText } from '../../utils';
import Spell from '../Spell/Spell';
import './KnightInfo.css';

const KnightInfo = () => {
  const { loadout } = useLoadout();
  const { nail, charms, spells } = loadout;

  const charmsNames = charms.map((charm) => charm.name);
  const hasQuickSlash = charmsNames.includes('quick-slash');

  return (
    <section className="KnightInfo">
      <div>
        <img
          src={`nails/${nail.name}.png`}
          height={180}
          alt={nail.name}
        />
      </div>
      <div className="KnightInfo-nail">
        <h3>Base </h3>
        <span className="u-numberText">{nail.damage}</span>
        <h3>DPS </h3>
        <span className="u-numberText">{calculateDPS(nail.damage, hasQuickSlash)}</span>
        <h3>Swing Speed </h3>
        <span className="u-numberText">{SWING_SPEED}s</span>
      </div>
      <div className="KnightInfo-nailArtsContainer">
        {nailArtsData.map((art) => (
          <div className="KnightInfo-nailArt">
            <img
              src={`nail-arts/${art.name}.png`}
              alt={art.name}
              width={60}
              height={60}
            />
            <div>
              {art.name === 'cyclone-slash' ? (
                <>
                  <h3>{capitalizeText(art.name)} (3-6 HITS)</h3>
                  <span className="u-numberText">{`${art.damagePerNailLevel[nail.level - 1] * 3} - ${
                    art.damagePerNailLevel[nail.level - 1] * 6
                  }`}</span>
                  <span className="u-smallText">DMG</span>
                </>
              ) : (
                <>
                  <h3>{capitalizeText(art.name)}</h3>
                  <span className="u-numberText">{art.damagePerNailLevel[nail.level - 1]}</span>
                  <span className="u-smallText">DMG</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="KnightInfo-spellsContainer">
        {spells.map((spell) => (
          <Spell spell={spell} />
        ))}
      </div>
    </section>
  );
};

export default KnightInfo;
