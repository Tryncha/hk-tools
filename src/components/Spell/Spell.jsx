import { useLoadout } from '../../hooks/useLoadout';
import { getSpellData } from '../../utils';
import './Spell.css';

const Spell = ({ spell }) => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  const { id, name, description, damage, imgSrc } = getSpellData(spell);

  const charmsNames = charms.map((charm) => charm.name);

  const hasShamanStone = charmsNames.includes('shaman-stone');

  // console.log('hasShamanStone', hasShamanStone);

  const IMG_WIDTH = 70;
  const IMG_HEIGHT = 50;

  switch (name) {
    case 'Vengeful Spirit': {
      const shamanStoneBonus = 0.33;
      const totalDamage = Math.round(damage + damage * hasShamanStone * shamanStoneBonus);

      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{totalDamage}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );
    }

    case 'Desolate Dive': {
      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{damage.base.total}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );
    }

    case 'Howling Wraiths':
      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{damage.base.total}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );

    case 'Shade Soul':
      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{damage.base}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );

    case 'Descending Dark':
      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{damage.base.total[0]}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );

    case 'Abyss Shriek':
      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{damage.base.total}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );

    case 'Flukelings': {
      const { flukes, perHit } = damage;
      const total = flukes * perHit;

      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{total}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );
    }

    case 'Shade Flukelings': {
      const { flukes, perHit } = damage;
      const total = flukes * perHit;

      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{total}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );
    }

    case 'Volatile Fluke': {
      const tick = 0.1;

      const { impact, cloud, time } = damage;
      const total = impact + (cloud * time) / tick;

      return (
        <div className="Spell">
          <img
            width={IMG_WIDTH}
            height={IMG_HEIGHT}
            src={imgSrc}
            alt={name}
            title={name}
          />
          <div>
            <h3>{name}</h3>
            <span className="u-numberText">{total}</span>
            <span className="u-smallText">DMG</span>
          </div>
        </div>
      );
    }

    default:
      return (
        <div className="Spell">
          <h3>Spell not found</h3>
        </div>
      );
  }
};

export default Spell;
