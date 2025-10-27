import { QUICK_SWING_SPEED, SWING_SPEED } from '../constants';
// import nails from '../data/nails';
import { CHARMS } from '../data/charms';
import { SPELLS } from '../data/spells';
import { Charm } from '../types';

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

// export function getNailData(id: number) {
//   return nails.find((n) => n.id === id);
// }

export function getCharmData(id: string): Charm {
  const charmData = CHARMS.find((c) => c.id === id);

  if (!charmData) throw new Error('Not charm data found...');
  return charmData;
}

export function getSpellData(id: number) {
  return SPELLS.find((s) => s.id === id);
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
