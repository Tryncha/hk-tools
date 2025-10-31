import { Spell } from '../types';

export const SPELLS: Spell[] = [
  {
    id: 'vengeful-spirit',
    name: 'Vengeful Spirit',
    description:
      'Conjure a spirit that will fly forward and burn foes in its path.\nThe spirit requires SOUL to be conjured. Strike enemies to gather SOUL.',
    location: 'Ancestral Mound',
    damage: {
      projectile: 15,
      total: 15
    },
    image: {
      data: 'hollow-knight/spells/vengeful-spirit.png',
      width: 72,
      height: 64
    }
  },
  {
    id: 'desolate-dive',
    name: 'Desolate Dive',
    description:
      'Strike the ground with a concentrated force of SOUL. This force can destroy foes or break through fragile structures.\nThe force requires SOUL to be conjured. Strike enemies to gather SOUL.',
    location: 'Soul Sanctum',
    damage: {
      dive: 15,
      shockwave: 20,
      total: 35
    },
    image: {
      data: 'hollow-knight/spells/desolate-dive.png',
      width: 72,
      height: 64
    }
  },
  {
    id: 'howling-wraiths',
    name: 'Howling Wraiths',
    description:
      'Blast foes with screaming SOUL.\nThe Wraiths requires SOUL to be conjured. Strike enemies to gather SOUL.',
    location: 'Overgrown Mound',
    damage: {
      hits: 3,
      perHit: 13,
      total: 39
    },
    image: {
      data: 'hollow-knight/spells/howling-wraiths.png',
      width: 72,
      height: 64
    }
  },
  {
    id: 'shade-soul',
    name: 'Shade Soul',
    description:
      'Conjure a shadow that will fly forward and burn foes in its path.\nThe shadow requires SOUL to be conjured. Strike enemies to gather SOUL.',
    location: 'Soul Sanctum',
    damage: {
      projectile: 30,
      total: 30
    },
    image: {
      data: 'hollow-knight/spells/shade-soul.png',
      width: 72,
      height: 64
    }
  },
  {
    id: 'descending-dark',
    name: 'Descending Dark',
    description:
      'Strike the ground with a concentrated force of SOUL and Shadow. This force can destroy foes or break through fragile structures.\nThe force requires SOUL to be conjured. Strike enemies to gather SOUL.',
    location: 'Crystallised Mound',
    damage: {
      dive: 15,
      firstShockwave: 30,
      secondShockwave: 15,
      total: 60
    },
    image: {
      data: 'hollow-knight/spells/descending-dark.png',
      width: 72,
      height: 64
    }
  },
  {
    id: 'abyss-shriek',
    name: 'Abyss Shriek',
    description:
      'Blast foes with screaming SOUL and Shadow.\nThe Wraiths requires SOUL to be conjured. Strike enemies to gather SOUL.',
    location: 'The Abyss',
    damage: {
      hits: 4,
      perHit: 20,
      total: 80
    },
    image: {
      data: 'hollow-knight/spells/abyss-shriek.png',
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
      data: 'hollow-knight/spells/flukelings.png',
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
      data: 'hollow-knight/spells/shade-flukelings.png',
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
      data: 'hollow-knight/spells/volatile-fluke.png',
      width: 72,
      height: 64
    }
  }
];
