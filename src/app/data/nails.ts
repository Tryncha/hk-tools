import { Nail } from '../types.d';

import OldNail from '../assets/nails/old-nail.png';
import SharpenedNail from '../assets/nails/sharpened-nail.png';
import ChannelledNail from '../assets/nails/channelled-nail.png';
import CoiledNail from '../assets/nails/coiled-nail.png';
import PureNail from '../assets/nails/pure-nail.png';

export const NAILS: Nail[] = [
  {
    id: 'old-nail',
    name: 'Old Nail',
    description: 'A traditional weapon of Hallownest. Its blade is blunt with age and wear.',
    level: 1,
    damage: 5,
    image: {
      data: OldNail,
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
    image: {
      data: SharpenedNail,
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
    image: {
      data: ChannelledNail,
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
    image: {
      data: CoiledNail,
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
    image: {
      data: PureNail,
      width: 48,
      height: 216
    }
  }
];
