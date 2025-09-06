import { useLoadout } from '../../hooks/useLoadout';
import { capitalizeText, getNailData } from '../../utils';
import Spell from '../Spell/Spell';
import './KnightInfo.css';
import nailArtsData from '../../data-json/nailArtsData';
import NailInfo from '../NailInfo/NailInfo';

const KnightInfo = () => {
  const { loadout } = useLoadout();
  const { nail, spells } = loadout;

  const currentNail = getNailData(nail.id);

  return (
    <section className="KnightInfo">
      <NailInfo />
      <div className="KnightInfo-nailArtsContainer">
        {nailArtsData.map((art) => (
          <div
            key={art.id}
            className="KnightInfo-nailArt"
          >
            <img
              src={art.imgSrc}
              alt={art.name}
              width={60}
              height={60}
            />
            <div>
              {art.name === 'cyclone-slash' ? (
                <>
                  <h3>{capitalizeText(art.name)} (3-6 HITS)</h3>
                  <span className="u-numberText">{`${art.damagePerNailLevel[currentNail.level - 1] * 3} - ${
                    art.damagePerNailLevel[currentNail.level - 1] * 6
                  }`}</span>
                  <span className="u-smallText">DMG</span>
                </>
              ) : (
                <>
                  <h3>{capitalizeText(art.name)}</h3>
                  <span className="u-numberText">{art.damagePerNailLevel[currentNail.level - 1]}</span>
                  <span className="u-smallText">DMG</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="KnightInfo-spellsContainer">
        {spells.map((spell) => (
          <Spell
            key={spell.id}
            spellId={spell.id}
          />
        ))}
      </div>
    </section>
  );
};

export default KnightInfo;
