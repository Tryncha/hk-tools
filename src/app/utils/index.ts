import { QUICK_SWING_SPEED, SWING_SPEED } from '../constants';
import nails from '../data/nails.json';
import charms from '../data/charms.json';
import spells from '../data/spells.json';
import { NailArt, Spell } from '../types';

export function capitalizeText(text: string) {
  const excludedWords = ['of', 'and', 'to', 'the'];

  return text
    .split('-')
    .map((word) => {
      const lowerCaseWord = word.toLowerCase();
      if (!excludedWords.includes(lowerCaseWord)) {
        return lowerCaseWord[0].toUpperCase() + lowerCaseWord.slice(1);
      } else {
        return lowerCaseWord;
      }
    })
    .join(' ');
}

export function calculateDPS(damage: number, hasQuickSlash: boolean) {
  const attackPerSecond = hasQuickSlash ? 1 / QUICK_SWING_SPEED : 1 / SWING_SPEED;
  const damagePerSecond = attackPerSecond * damage;

  return damagePerSecond.toFixed(2);
}

export function getNailData(id: number) {
  return nails.find((n) => n.id === id);
}

export function getCharmData(id: number) {
  return charms.find((c) => c.id === id);
}

export function getSpellData(id: number) {
  return spells.find((s) => s.id === id);
}

export function getNailArtInfo(nailArt: NailArt, nailLevel: number) {
  const { name, damagePerNailLevel } = nailArt;

  switch (name) {
    case 'Great Slash':
      return { label: name, value: `${damagePerNailLevel[nailLevel - 1]}` };

    case 'Dash Slash':
      return { label: name, value: `${damagePerNailLevel[nailLevel - 1]}` };

    case 'Cyclone Slash': {
      const minDamage = damagePerNailLevel[nailLevel - 1] * 3;
      const maxDamage = damagePerNailLevel[nailLevel - 1] * 6;

      return {
        label: `${name} (3-6 Hits)`,
        value: `${minDamage} - ${maxDamage}`
      };
    }

    default:
      return {
        label: 'Unknown Nail Art',
        value: 'N/A'
      };
  }
}

export function calculateSpellDamage(name: string, spellComponent: number, hasShamanStone?: boolean) {
  const SHAMAN_STONE_BONUS: Record<string, number> = {
    'Vengeful Spirit': 0.33,
    'Desolate Dive': 0.51,
    'Howling Wraiths': 0.5,
    'Shade Soul': 0.33,
    'Descending Dark': 0.47,
    'Abyss Shriek': 0.5,
    'Flukelings': 0.25,
    'Shade Flukelings': 0.25
  };

  const totalDamage = spellComponent + spellComponent * (hasShamanStone ? 1 : 0) * SHAMAN_STONE_BONUS[name];
  return Math.round(totalDamage);
}

export function getSpellInfo(spell: Spell, hasShamanStone?: boolean) {
  const { name, damage } = spell;

  switch (name) {
    case 'Vengeful Spirit': {
      const { projectile } = damage;
      const total = calculateSpellDamage(name, projectile);

      return {
        label: 'Projectile',
        rawValue: `${total}`,
        extendedValue: `${total}`
      };
    }

    case 'Desolate Dive': {
      const { dive, shockwave } = damage;
      const totalDive = calculateSpellDamage(name, dive);
      const totalShockwave = calculateSpellDamage(name, shockwave);
      const total = totalDive + totalShockwave;

      return {
        label: 'Dive + Shockwave',
        rawValue: `${total}`,
        extendedValue: `${totalDive} + ${totalShockwave} = ${total}`
      };
    }

    case 'Howling Wraiths': {
      const { hits, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit);
      const total = totalPerHit * hits;

      return {
        label: `${hits} Hits`,
        rawValue: `${total}`,
        extendedValue: `${totalPerHit} × ${hits} = ${total}`
      };
    }

    case 'Shade Soul': {
      const { projectile } = damage;
      const total = calculateSpellDamage(name, projectile);

      return {
        label: 'Projectile',
        rawValue: `${total}`,
        extendedValue: `${total}`
      };
    }

    case 'Descending Dark': {
      const { dive, firstShockwave, secondShockwave } = damage;
      const totalDive = calculateSpellDamage(name, dive);
      const totalFirstShockwave = calculateSpellDamage(name, firstShockwave);
      const totalSecondShockwave = calculateSpellDamage(name, secondShockwave);
      const total = totalDive + totalFirstShockwave + totalSecondShockwave;

      return {
        label: 'Dive + First Shockwave + Second Shockwave',
        rawValue: `${total}`,
        extendedValue: `${totalDive} + ${totalFirstShockwave} + ${totalSecondShockwave} = ${total}`
      };
    }

    case 'Abyss Shriek': {
      const { hits, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit);
      const total = totalPerHit * hits;

      return {
        label: `${hits} Hits`,
        rawValue: `${total}`,
        extendedValue: `${totalPerHit} × ${hits} = ${total}`
      };
    }

    case 'Flukelings': {
      const { flukes, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit);
      const total = totalPerHit * flukes;

      return {
        label: `${flukes} Flukes`,
        rawValue: `${total}`,
        extendedValue: `${totalPerHit} × ${flukes} = ${total}`
      };
    }

    case 'Shade Flukelings': {
      const { flukes, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit);
      const total = totalPerHit * flukes;

      return {
        label: `${damage.flukes} Flukes`,
        rawValue: `${total}`,
        extendedValue: `${totalPerHit} × ${flukes} = ${total}`
      };
    }

    case 'Volatile Fluke': {
      const { impact, cloud, time } = damage;
      const totalTime = time + (hasShamanStone ? 1 : 0);
      const total = impact + cloud * totalTime * 10;

      return {
        label: 'Impact + Cloud × Time',
        rawValue: `${total}`,
        extendedValue: `${impact} + ${cloud} × ${totalTime} = ${total}`
      };
    }

    default:
      return {
        label: 'Unknown Spell',
        rawValue: 'N/A',
        extendedValue: 'N/A'
      };
  }
}
