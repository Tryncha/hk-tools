import { Minion } from '../types';

import grimmchild from '../assets/minions/grimmchild.png';
import hatchling from '../assets/minions/hatchling.png';
import weaverling from '../assets/minions/weaverling.png';

export const MINIONS: Minion[] = [
  {
    id: 'hatchling',
    name: 'Hatchling',
    damage: 9,
    quantity: 4,
    image: {
      data: hatchling,
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
      data: weaverling,
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
      data: grimmchild,
      width: 96 * 0.9,
      height: 107 * 0.9
    }
  }
];
