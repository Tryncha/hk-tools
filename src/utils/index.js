import { QUICK_SWING_SPEED, SWING_SPEED } from '../constants';
import nailsData from '../data-json/nailsData.json';
import charmsData from '../data-json/charmsData.json';
import spellsData from '../data-json/spellsData.json';

export function capitalizeText(text) {
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

export function calculateDPS(damage, hasQuickSlash) {
  const attackPerSecond = hasQuickSlash ? 1 / QUICK_SWING_SPEED : 1 / SWING_SPEED;
  const damagePerSecond = attackPerSecond * damage;

  return damagePerSecond.toFixed(2);
}

export function getNailData(id) {
  return nailsData.find((nail) => nail.id === id);
}

export function getCharmData(id) {
  return charmsData.find((charmObj) => charmObj.id === id);
}

export function getSpellData(id) {
  return spellsData.find((spellObj) => spellObj.id === id);
}
