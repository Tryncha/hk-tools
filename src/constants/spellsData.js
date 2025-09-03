export const spellsData = [
  {
    id: 0,
    name: 'Vengeful Spirit',
    description: `Conjure a spirit that will fly forward and burn foes in its path.\nThe spirit requires SOUL to be conjured. Strike enemies to gather SOUL.`,
    damage: 15,
    imgSrc: 'spells/vengeful-spirit.png'
  },
  {
    id: 1,
    name: 'Desolate Dive',
    description: `Strike the ground with a concentrated force of SOUL. This force can destroy foes or break through fragile structures.\nThe force requires SOUL to be conjured. Strike enemies to gather SOUL.`,
    damage: {
      base: {
        dive: 15,
        shockwave: 20,
        total: 35
      },
      with: {
        shamanStone: {
          dive: 23,
          shockwave: 30,
          total: 53
        }
      }
    },
    imgSrc: 'spells/desolate-dive.png'
  },
  {
    id: 2,
    name: 'Howling Wraiths',
    description: `Blast foes with screaming SOUL.\nThe Wraiths requires SOUL to be conjured. Strike enemies to gather SOUL.`,
    damage: {
      base: {
        perHit: 13,
        total: 39
      },
      with: {
        shamanStone: {
          perHit: 20,
          total: 60
        }
      }
    },
    imgSrc: 'spells/howling-wraiths.png'
  },
  {
    id: 3,
    name: 'Shade Soul',
    description: `Conjure a shadow that will fly forward and burn foes in its path.\nThe shadow requires SOUL to be conjured. Strike enemies to gather SOUL.`,
    damage: 30,
    imgSrc: 'spells/shade-soul.png'
  },
  {
    id: 4,
    name: 'Descending Dark',
    description: `Strike the ground with a concentrated force of SOUL and Shadow. This force can destroy foes or break through fragile structures.\nThe force requires SOUL to be conjured. Strike enemies to gather SOUL.`,
    damage: {
      base: {
        dive: 15,
        firstShockwave: [35, 30],
        secondShockwave: 15,
        total: [60, 65]
      },
      with: {
        shamanStone: {
          dive: 23,
          firstShockwave: 50,
          secondShockwave: 15,
          total: 88
        }
      }
    },
    imgSrc: 'spells/descending-dark.png'
  },
  {
    id: 5,
    name: 'Abyss Shriek',
    description: `Blast foes with screaming SOUL and Shadow.\nThe Wraiths requires SOUL to be conjured. Strike enemies to gather SOUL.`,
    damage: {
      base: {
        perHit: 20,
        total: 80
      },
      with: {
        shamanStone: {
          perHit: 30,
          total: 120
        }
      }
    },
    imgSrc: 'spells/abyss-shriek.png'
  },
  {
    id: 6,
    name: 'Flukelings',
    description: ``,
    damage: {
      flukes: 9,
      perHit: 4
    },
    imgSrc: 'spells/flukelings.png'
  },
  {
    id: 7,
    name: 'Shade Flukelings',
    description: ``,
    damage: {
      flukes: 16,
      perHit: 4
    },
    imgSrc: 'spells/shade-flukelings.png'
  },
  {
    id: 8,
    name: 'Volatile Fluke',
    description: ``,
    damage: {
      impact: 3,
      cloud: 1,
      time: 2.2
    },
    imgSrc: 'spells/volatile-fluke.png'
  }
];
