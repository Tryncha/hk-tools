import { QUICK_SWING_SPEED, SWING_SPEED } from '../constants';
import nails from '../data/nails.json';
import charms from '../data/charms.json';
import spells from '../data/spells.json';

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
