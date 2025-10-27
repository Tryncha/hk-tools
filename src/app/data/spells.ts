import { Spell } from '../types.d';

import vengefulSpirit from '../assets/spells/vengeful-spirit.png';
import desolateDive from '../assets/spells/desolate-dive.png';
import howlingWraiths from '../assets/spells/howling-wraiths.png';
import shadeSoul from '../assets/spells/shade-soul.png';
import descendingDark from '../assets/spells/descending-dark.png';
import abyssShriek from '../assets/spells/abyss-shriek.png';
import flukelings from '../assets/spells/flukelings.png';
import shadeFlukelings from '../assets/spells/shade-flukelings.png';
import volatileFluke from '../assets/spells/volatile-fluke.png';

export const SPELLS: Spell[] = [
  {
    id: 'vengeful-spirit',
    name: 'Vengeful Spirit',
    description:
      'Conjure a spirit that will fly forward and burn foes in its path.\nThe spirit requires SOUL to be conjured. Strike enemies to gather SOUL.',
    damage: {
      projectile: 15,
      total: 15
    },
    image: {
      data: vengefulSpirit,
      width: 72,
      height: 64
    }
  },
  {
    id: 'desolate-dive',
    name: 'Desolate Dive',
    description:
      'Strike the ground with a concentrated force of SOUL. This force can destroy foes or break through fragile structures.\nThe force requires SOUL to be conjured. Strike enemies to gather SOUL.',
    damage: {
      dive: 15,
      shockwave: 20,
      total: 35
    },
    image: {
      data: desolateDive,
      width: 72,
      height: 64
    }
  },
  {
    id: 'howling-wraiths',
    name: 'Howling Wraiths',
    description:
      'Blast foes with screaming SOUL.\nThe Wraiths requires SOUL to be conjured. Strike enemies to gather SOUL.',
    damage: {
      hits: 3,
      perHit: 13,
      total: 39
    },
    image: {
      data: howlingWraiths,
      width: 72,
      height: 64
    }
  },
  {
    id: 'shade-soul',
    name: 'Shade Soul',
    description:
      'Conjure a shadow that will fly forward and burn foes in its path.\nThe shadow requires SOUL to be conjured. Strike enemies to gather SOUL.',
    damage: {
      projectile: 30,
      total: 30
    },
    image: {
      data: shadeSoul,
      width: 72,
      height: 64
    }
  },
  {
    id: 'descending-dark',
    name: 'Descending Dark',
    description:
      'Strike the ground with a concentrated force of SOUL and Shadow. This force can destroy foes or break through fragile structures.\nThe force requires SOUL to be conjured. Strike enemies to gather SOUL.',
    damage: {
      dive: 15,
      firstShockwave: 30,
      secondShockwave: 15,
      total: 60
    },
    image: {
      data: descendingDark,
      width: 72,
      height: 64
    }
  },
  {
    id: 'abyss-shriek',
    name: 'Abyss Shriek',
    description:
      'Blast foes with screaming SOUL and Shadow.\nThe Wraiths requires SOUL to be conjured. Strike enemies to gather SOUL.',
    damage: {
      hits: 4,
      perHit: 20,
      total: 80
    },
    image: {
      data: abyssShriek,
      width: 72,
      height: 64
    }
  },
  {
    id: 'flukelings',
    name: 'Flukelings',
    description: '',
    damage: {
      flukes: 9,
      perHit: 4
    },
    image: {
      data: flukelings,
      width: 72,
      height: 64
    }
  },
  {
    id: 'shade-flukelings',
    name: 'Shade Flukelings',
    description: '',
    damage: {
      flukes: 16,
      perHit: 4
    },
    image: {
      data: shadeFlukelings,
      width: 72,
      height: 64
    }
  },
  {
    id: 'volatile-fluke',
    name: 'Volatile Fluke',
    description: '',
    damage: {
      impact: 3,
      cloud: 1,
      time: 2.2
    },
    image: {
      data: volatileFluke,
      width: 72,
      height: 64
    }
  }
];
