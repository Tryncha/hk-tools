import { Nail } from '../app/types';

export const NAILS: Nail[] = [
  {
    id: 'old-nail',
    name: 'Old Nail',
    description: 'A traditional weapon of Hallownest. Its blade is blunt with age and wear.',
    level: 1,
    damage: 5,
    image: {
      data: '/nails/old-nail.png',
      width: 48,
      height: 216
    }
  },
  {
    id: 'sharpened-nail',
    name: 'Sharpened Nail',
    description: 'A traditional weapon of Hallownest, restored to lethal form.',
    level: 2,
    damage: 9,
    cost: '![Geo](/ui/geo.png) 250',
    image: {
      data: '/nails/sharpened-nail.png',
      width: 48,
      height: 216
    }
  },
  {
    id: 'channelled-nail',
    name: 'Channelled Nail',
    description: 'A cleft weapon of Hallownest. The blade is exquisitly balanced.',
    level: 3,
    damage: 13,
    cost: '![Geo](/ui/geo.png) 800 + 1 Pale Ore',
    image: {
      data: '/nails/channelled-nail.png',
      width: 48,
      height: 216
    }
  },
  {
    id: 'coiled-nail',
    name: 'Coiled Nail',
    description: 'A powerful weapon of Hallownest, refined beyond all others.',
    level: 4,
    damage: 17,
    cost: '![Geo](/ui/geo.png) 2000 + 2 Pale Ore',
    image: {
      data: '/nails/coiled-nail.png',
      width: 48,
      height: 216
    }
  },
  {
    id: 'pure-nail',
    name: 'Pure Nail',
    description: 'The ultimate weapon of Hallownest. Crafted to perfection, this ancient nail reveals its true form.',
    level: 5,
    damage: 21,
    cost: '![Geo](/ui/geo.png) 4000 + 3 Pale Ore',
    image: {
      data: '/nails/pure-nail.png',
      width: 48,
      height: 216
    }
  }
];
