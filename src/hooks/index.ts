'use client';

import { useContext } from 'react';
import LoadoutContext from '../context/LoadoutContext';
import { HEALTH_DATA, SOUL_DATA } from '../constants';
import { NailArt, Spell } from '../types';
import { calculateSpellDamage } from '../utils';

export function useLoadout() {
  const loadoutContext = useContext(LoadoutContext);

  if (!loadoutContext) {
    throw new Error('useLoadout must be used within a LoadoutProvider');
  }

  return loadoutContext;
}

export function useCharmCheck(charmId: string) {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  const charmIds = charms.map((c) => c.id);

  return charmIds.includes(charmId);
}

export function useHealth() {
  const hasUnbreakableHeart = useCharmCheck('unbreakable-heart');
  const hasLifebloodHeart = useCharmCheck('lifeblood-heart');
  const hasLifebloodCore = useCharmCheck('lifeblood-core');
  const hasJonisBlessing = useCharmCheck('jonis-blessing');

  let maxHealth = HEALTH_DATA.MAX + 2 * (hasUnbreakableHeart ? 1 : 0);
  let lifebloodMasks = 0 + 2 * (hasLifebloodHeart ? 1 : 0) + 4 * (hasLifebloodCore ? 1 : 0);

  if (hasJonisBlessing) {
    lifebloodMasks = Math.ceil(maxHealth * 1.4) + lifebloodMasks;
    maxHealth = 0;
  }

  return { maxHealth, lifebloodMasks };
}

export function useSoul() {
  const hasGrubsong = useCharmCheck('grubsong');
  const hasSpellTwister = useCharmCheck('spell-twister');
  const hasSoulCatcher = useCharmCheck('soul-catcher');
  const hasSoulEater = useCharmCheck('soul-eater');

  const maxSoul = {
    base: SOUL_DATA.MAX.BASE,
    perVessel: SOUL_DATA.MAX.PER_VESSEL
  };

  const soulCost = SOUL_DATA.COST - 9 * (hasSpellTwister ? 1 : 0);

  const soulGain = {
    perHit: SOUL_DATA.GAIN.PER_HIT + 15 * (hasGrubsong ? 1 : 0),
    perAttack: SOUL_DATA.GAIN.PER_ATTACK + 3 * (hasSoulCatcher ? 1 : 0) + 8 * (hasSoulEater ? 1 : 0)
  };

  return { maxSoul, soulCost, soulGain };
}

export function useSpell(spell: Spell) {
  const { name, damage } = spell;

  const hasShamanStone = useCharmCheck('shaman-stone');

  switch (name) {
    case 'Vengeful Spirit': {
      const { projectile } = damage;
      const total = calculateSpellDamage(name, projectile, hasShamanStone);

      return {
        label: 'Projectile',
        rawValue: `${total}`,
        extendedValue: `${total}`
      };
    }

    case 'Desolate Dive': {
      const { dive, shockwave } = damage;
      const totalDive = calculateSpellDamage(name, dive, hasShamanStone);
      const totalShockwave = calculateSpellDamage(name, shockwave, hasShamanStone);
      const total = totalDive + totalShockwave;

      return {
        label: 'Dive + Shockwave',
        rawValue: `${total}`,
        extendedValue: `${totalDive} + ${totalShockwave} = ${total}`
      };
    }

    case 'Howling Wraiths': {
      const { hits, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit, hasShamanStone);
      const total = totalPerHit * hits;

      return {
        label: `${hits} Hits`,
        rawValue: `${total}`,
        extendedValue: `${totalPerHit} × ${hits} = ${total}`
      };
    }

    case 'Shade Soul': {
      const { projectile } = damage;
      const total = calculateSpellDamage(name, projectile, hasShamanStone);

      return {
        label: 'Projectile',
        rawValue: `${total}`,
        extendedValue: `${total}`
      };
    }

    case 'Descending Dark': {
      const { dive, firstShockwave, secondShockwave } = damage;
      const totalDive = calculateSpellDamage(name, dive, hasShamanStone);
      const totalFirstShockwave = calculateSpellDamage(name, firstShockwave, hasShamanStone);
      const totalSecondShockwave = calculateSpellDamage(name, secondShockwave, hasShamanStone);
      const total = totalDive + totalFirstShockwave + totalSecondShockwave;

      return {
        label: 'Dive + First Shockwave + Second Shockwave',
        rawValue: `${total}`,
        extendedValue: `${totalDive} + ${totalFirstShockwave} + ${totalSecondShockwave} = ${total}`
      };
    }

    case 'Abyss Shriek': {
      const { hits, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit, hasShamanStone);
      const total = totalPerHit * hits;

      return {
        label: `${hits} Hits`,
        rawValue: `${total}`,
        extendedValue: `${totalPerHit} × ${hits} = ${total}`
      };
    }

    case 'Flukelings': {
      const { flukes, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit, hasShamanStone);
      const total = totalPerHit * flukes;

      return {
        label: `${flukes} Flukes`,
        rawValue: `${total}`,
        extendedValue: `${totalPerHit} × ${flukes} = ${total}`
      };
    }

    case 'Shade Flukelings': {
      const { flukes, perHit } = damage;
      const totalPerHit = calculateSpellDamage(name, perHit, hasShamanStone);
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

export function useNailArt(nailArt: NailArt, nailLevel: number) {
  const { loadout } = useLoadout();
  const { isLowHealth } = loadout;

  const { name, damagePerNailLevel } = nailArt;

  const hasFuryOfTheFallen = useCharmCheck('fury-of-the-fallen');

  switch (name) {
    case 'Great Slash':
      return {
        label: name,
        value: `${damagePerNailLevel[nailLevel - 1] * (hasFuryOfTheFallen && isLowHealth ? 1.75 : 1)}`
      };

    case 'Dash Slash':
      return {
        label: name,
        value: `${damagePerNailLevel[nailLevel - 1] * (hasFuryOfTheFallen && isLowHealth ? 1.75 : 1)}`
      };

    case 'Cyclone Slash': {
      const minDamage = damagePerNailLevel[nailLevel - 1] * 3 * (hasFuryOfTheFallen && isLowHealth ? 1.75 : 1);
      const maxDamage = damagePerNailLevel[nailLevel - 1] * 6 * (hasFuryOfTheFallen && isLowHealth ? 1.75 : 1);

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

export function useStats() {
  const { loadout } = useLoadout();
  const { nail, isLowHealth } = loadout;

  const hasUnbreakableStrength = useCharmCheck('unbreakable-strength');
  const hasFuryOfTheFallen = useCharmCheck('fury-of-the-fallen');

  const nailDamage = nail.damage * (hasUnbreakableStrength ? 1.5 : 1) * (hasFuryOfTheFallen && isLowHealth ? 1.75 : 1);

  return { nailDamage };
}
