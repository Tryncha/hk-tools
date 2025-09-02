import { QUICK_SWING_SPEED, SWING_SPEED } from '../constants';

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
