'use client';

import { useContext } from 'react';
import LoadoutContext from '../context/LoadoutContext';
import { HEALTH_DATA, SOUL_DATA } from '../constants';

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

  const maxHealth = HEALTH_DATA.MAX + 2 * (hasUnbreakableHeart ? 1 : 0);

  return { maxHealth };
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
