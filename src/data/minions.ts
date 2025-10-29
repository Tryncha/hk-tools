import { Minion } from '../types';

export const MINIONS: Minion[] = [
  {
    id: 'hatchling',
    name: 'Hatchling',
    damage: 9,
    quantity: 4,
    image: {
      data: '/hollow-knight/minions/hatchling.png',
      width: 70,
      height: 59
    }
  },
  {
    id: 'weaverling',
    name: 'Weaverling',
    damage: 3,
    quantity: 3,
    image: {
      data: '/hollow-knight/minions/weaverling.png',
      width: 96,
      height: 67
    }
  },
  {
    id: 'grimmchild',
    name: 'Grimmchild',
    damage: 11,
    quantity: 1,
    image: {
      data: '/hollow-knight/minions/grimmchild.png',
      width: 96 * 0.9,
      height: 107 * 0.9
    }
  }
];
