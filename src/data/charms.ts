import { Charm } from '../types';

export const CHARMS: Charm[] = [
  {
    id: 'wayward-compass',
    image: '/hollow-knight/charms/wayward-compass.png',
    name: 'Wayward Compass',
    notchCost: 1,
    description:
      'Whispers its location to the bearer whenever a map is open, allowing wanderers to pinpoint their current location',
    location: 'Sold by Iselda in Dirthmouth for ![Geo](/hollow-knight/ui/geo.png) 200, after encountering Cornifer',
    effects: ["Shows Knight's location on map"]
  },
  {
    id: 'gathering-swarm',
    image: '/hollow-knight/charms/gathering-swarm.png',
    name: 'Gathering Swarm',
    notchCost: 1,
    description:
      "A swarm will follow the bearer and gather up any loose Geo.\nUseful for those who can't bear to leave anything behind, no matter how insignificant",
    location: 'Sold by Sly in Dirtmouth for ![Geo](/hollow-knight/ui/geo.png) 300',
    effects: ['Collects dropped ![Geo](/hollow-knight/ui/geo.png) Geo']
  },
  {
    id: 'stalwart-shell',
    image: '/hollow-knight/charms/stalwart-shell.png',
    name: 'Stalwart Shell',
    notchCost: 2,
    description:
      'Builds resilience. When recovering from damage, the bearer will remain invulnerable for longer.\nMakes it easier to escape from dangerous situations',
    location: 'Sold by Sly in Dirtmouth for ![Geo](/hollow-knight/ui/geo.png) 200',
    effects: [
      'Increases invincibility duration after being hit by ~35%',
      'Reduces hit recoil (no input time) after being hit by 60%'
    ]
  },
  {
    id: 'soul-catcher',
    image: '/hollow-knight/charms/soul-catcher.png',
    name: 'Soul Catcher',
    notchCost: 2,
    description:
      'Used by shamans to draw more SOUL from the world around them.\nIncreases the amount of SOUL gained when striking an enemy with the nail',
    location: 'Ancestral Mound, west of Elder Baldur',
    effects: ['Gain +3 additional SOUL with each hit for main Soul Vessel', 'Gain +2 for reserve Soul Vessels']
  },
  {
    id: 'shaman-stone',
    image: '/hollow-knight/charms/shaman-stone.png',
    name: 'Shaman Stone',
    notchCost: 3,
    description:
      'Said to contain the knowledge of past generations of shaman.\nIncreases the power of spells, dealing more damage to foes',
    location: 'Sold by Salubra in Forgotten Crossroads for ![Geo](/hollow-knight/ui/geo.png) 220',
    effects: [
      'Increases **Vengeful Spirit** and **Shade Soul** damage by 33%',
      'Increases **Desolate Dive** damage by 51% and **Descending Dark** damage by 47%',
      'Increases **Howling Wraiths** and **Abyss Shriek** damage by 50%',
      'Increases the size of **Vengeful Spirit** and **Shade Soul**'
    ]
  },
  {
    id: 'soul-eater',
    image: '/hollow-knight/charms/soul-eater.png',
    name: 'Soul Eater',
    notchCost: 4,
    description:
      'Forgotten shaman artifact, used to draw SOUL from still-living creatures.\nGreatly increases the amount of SOUL gained when striking an enemy with the nail',
    location: 'Resting Grounds. Requires Desolate Dive',
    effects: ['Gain +8 additional SOUL with each hit for main Soul Vessel', 'Gain +6 for reserve Soul Vessels']
  },
  {
    id: 'dashmaster',
    image: '/hollow-knight/charms/dashmaster.png',
    name: 'Dashmaster',
    notchCost: 2,
    description:
      "Bears the likeness of an eccentric bug known only as 'The Dashmaster'.\nThe bearer will be able to dash more often as well as dash downwards. Perfect for those who want to move around as quickly as possible",
    location: 'Fungal Wastes, south of Mantis Village',
    effects: ['Reduces the Mothwing Cloak cooldown by 33%', 'Allows dashing downwards by holding DOWN'],
    synergies: [
      {
        charmId: 'sharp-shadow',
        effect: 'Increases the damage dealt by the shadow to 1.5 × Nail damage. Does not affect charge or cooldown time'
      },
      {
        charmId: 'sprintmaster',
        effect: 'Further increases the movement speed bonus to 39%'
      }
    ]
  },
  {
    id: 'sprintmaster',
    image: '/hollow-knight/charms/sprintmaster.png',
    name: 'Sprintmaster',
    notchCost: 1,
    description:
      "Bears the likeness of a strange bug known only as 'The Sprintmaster'.\nIncreases the running speed of the bearer, allowing them to avoid danger or overtake rivals",
    location: "Sold by Sly in Dirtmouth for ![Geo](/hollow-knight/ui/geo.png) 400. Requires Shopkeeper's Key",
    effects: ['Increases run speed by ~20%'],
    synergies: [
      {
        charmId: 'dashmaster',
        effect: 'Further increases the movement speed bonus to 39%'
      },
      {
        charmId: 'weaversong',
        effect: 'Weaverlings move 50% faster'
      }
    ]
  },
  {
    id: 'grubsong',
    image: '/hollow-knight/charms/grubsong.png',
    name: 'Grubsong',
    notchCost: 1,
    description: 'Contains the gratitude of freed grubs.\nGain SOUL when taking damage',
    location: 'Reward from Grubfather for freeing 10 Grubs',
    effects: ['Gain 15 SOUL when taking damage'],
    synergies: [
      {
        charmId: 'weaversong',
        effect:
          "Weaverlings now give the Knight SOUL when they damage enemies (3 SOUL per hit), and can even collect SOUL from enemies that normally wouldn't give any from Nail hits (such as the Collector or Siblings). SOUL can also be collected after death, but before the screen transition, allowing the Knight to wake up at a Bench with SOUL"
      },
      {
        charmId: 'grubberflys-elegy',
        effect: 'Increases the amount of SOUL received when taking damage from 15 to 25'
      }
    ]
  },
  {
    id: 'grubberflys-elegy',
    image: '/hollow-knight/charms/grubberflys-elegy.png',
    name: "Grubberly's Elegy",
    notchCost: 3,
    description:
      'Contains the gratitude of grubs who will move to the next stage of their lives. Imbues weapons with a holy strength.\nWhen the bearer is at full health, they will fire beams of white-hot energy from their nail',
    location: 'Reward from Grubfather for freeing all Grubs',
    effects: ['When at full Masks, Nail attacks fire a projectile dealing 50% Nail damage per hit'],
    synergies: [
      {
        charmId: 'grubsong',
        effect: 'Increases the amount of SOUL received when taking damage from 15 to 25'
      },
      {
        charmId: 'mark-of-pride',
        effect: "Increases the height of the projectiles from Grubberfly's Elegy by 35%"
      },
      {
        charmId: 'fury-of-the-fallen',
        effect:
          "Fires red projectiles at one Mask, dealing ~67.5% Nail damage per projectile. Note that this works only when the Knight has only 1 Mask left (No projectiles are sent at 1 Mask if Fury of the Fallen is not equipped). While at one Mask, gaining any Lifeblood Masks negates the effect of Grubberfly's Elegy but not the effect of Fury of the Fallen"
      }
    ]
  },
  {
    id: 'unbreakable-heart',
    image: '/hollow-knight/charms/unbreakable-heart.png',
    name: 'Unbreakable Heart',
    notchCost: 2,
    description: 'Increases the health of the bearer, allowing them to take more damage.\nThis charm is unbreakable',
    location:
      "Sold by Leg Eater in Fungal Wastes for ![Geo](/hollow-knight/ui/geo.png) 350 (![Geo](/hollow-knight/ui/geo.png) 280 if Defender\'s Crest is equipped). Can be upgraded by Divine in Dirtmouth for ![Geo](/hollow-knight/ui/geo.png) 12000",
    effects: ['Adds two Masks of health']
  },
  {
    id: 'unbreakable-greed',
    image: '/hollow-knight/charms/unbreakable-greed.png',
    name: 'Unbreakable Greed',
    notchCost: 2,
    description: 'Causes the bearer to find more Geo when defeating enemies.\nThis charm is unbreakable',
    location:
      "Sold by Leg Eater in Fungal Wastes for ![Geo](/hollow-knight/ui/geo.png) 250 (![Geo](/hollow-knight/ui/geo.png) 200 if Defender\'s Crest is equipped). Can be upgraded by Divine in Dirtmouth for ![Geo](/hollow-knight/ui/geo.png) 9000",
    effects: ['Enemies drop 20-100% more Geo']
  },
  {
    id: 'unbreakable-strength',
    image: '/hollow-knight/charms/unbreakable-strength.png',
    name: 'Unbreakable Strength',
    notchCost: 3,
    description:
      'Strengthens the bearer, increasing the damage they deal to enemies with their nail.\nThis charm is unbreakable',
    location:
      "Sold by Leg Eater in Fungal Wastes for ![Geo](/hollow-knight/ui/geo.png) 600 (![Geo](/hollow-knight/ui/geo.png) 480 if Defender\'s Cerst is equipped). Can be upgraded by Divine in Dirtmouth for ![Geo](/hollow-knight/ui/geo.png) 15000",
    effects: ['Increases Nail damage by 50%']
  },
  {
    id: 'spell-twister',
    image: '/hollow-knight/charms/spell-twister.png',
    name: 'Spell Twister',
    notchCost: 2,
    description:
      "Reflecting the desires of the Soul Sanctum for mastery over SOUL, it improves the bearer's ability to cast spells.\nReduces the SOUL cost of casting spells",
    location: 'Soul Sanctum, in the room before encountering Soul Master',
    effects: ['Reduces SOUL cost of Spells to 24 from 33']
  },
  {
    id: 'steady-body',
    image: '/hollow-knight/charms/steady-body.png',
    name: 'Steady Body',
    notchCost: 1,
    description:
      'Keeps its bearer from recoiling backwards when they strike an enemy with a nail.\nAllows one to stay steady and keep attacking',
    location: 'Sold by Salubra in Forgotten Crossroads for ![Geo](/hollow-knight/ui/geo.png) 120',
    effects: ['Removes all knockback/recoil from hitting enemies']
  },
  {
    id: 'heavy-blow',
    image: '/hollow-knight/charms/heavy-blow.png',
    name: 'Heavy Blow',
    notchCost: 2,
    description:
      "Formed from the nails of fallen warriors.\nIncreases the force of the bearer's nail, causing enemies to recoil further when hit",
    location: "Sold by Sly in Dirtmouth for ![Geo](/hollow-knight/ui/geo.png) 350. Requires Shopkeeper's Key",
    effects: [
      'Increases Nail attack knockback by 75%',
      'Increases Great Slash knockback by 33%',
      'Reduces number of hits needed to stagger a boss by 1'
    ]
  },
  {
    id: 'quick-slash',
    image: '/hollow-knight/charms/quick-slash.png',
    name: 'Quick Slash',
    notchCost: 3,
    description:
      'Born from imperfect, discarded nails that have fused together. The nails still long to be wielded.\nAllows the bearer to slash much more rapidly with their nail',
    location: "Kingdom's Edge, south of Oro's hut",
    effects: ['Decreases Nail attack cooldown (Total time between attacks) by ~39%']
  },
  {
    id: 'longnail',
    image: '/hollow-knight/charms/longnail.png',
    name: 'Longnail',
    notchCost: 2,
    description: "Increases the range of the bearer's nail, allowing them to strike foes from further away",
    location: 'Sold by Salubra in Forgotten Crossroads for ![Geo](/hollow-knight/ui/geo.png) 300',
    effects: ['Increases Nail range by 15%']
  },
  {
    id: 'mark-of-pride',
    image: '/hollow-knight/charms/mark-of-pride.png',
    name: 'Mark of Pride',
    notchCost: 3,
    description:
      "Freely given by the Mantis Tribe to those they respect.\nGreatly increases the range of the bearer's nail, allowing them to strike foes from further away",
    location: 'Mantis Village, northeast of the Mantis Lords room. Requires defeating the Mantis Lords',
    effects: ['Increases Nail range by 25%'],
    synergies: [
      {
        charmId: 'grubberflys-elegy',
        effect: "Increases the height of the projectiles from Grubberfly's Elegy by 35%"
      }
    ]
  },
  {
    id: 'fury-of-the-fallen',
    image: '/hollow-knight/charms/fury-of-the-fallen.png',
    name: 'Fury of the Fallen',
    notchCost: 2,
    description:
      "Embodies the fury and heroism that comes upon those who are about to die.\nWhen close to death, the bearer's strength will increase",
    location: "King's Pass, east of the starting room",
    effects: ['Increases Nail damage by 75% when at 1 Mask', 'This effect is also applied to Nail Arts'],
    synergies: [
      {
        charmId: 'grubberflys-elegy',
        effect:
          "Fires red projectiles at one Mask, dealing ~67.5% Nail damage per projectile. Note that this works only when the Knight has only 1 Mask left (No projectiles are sent at 1 Mask if Fury of the Fallen is not equipped). While at one Mask, gaining any Lifeblood Masks negates the effect of Grubberfly's Elegy but not the effect of Fury of the Fallen"
      },
      {
        charmId: 'glowing-womb',
        effect:
          "Increases any spawned Hatchlings' contact damage by 5 when at 1 Mask. Already spawned Hatchlings change only when entering another room"
      }
    ]
  },
  {
    id: 'thorns-of-agony',
    image: '/hollow-knight/charms/thorns-of-agony.png',
    name: 'Thorns of Agony',
    notchCost: 1,
    description:
      'Senses the pain of its bearer and lashes out at the world around them.\nWhen taking damage, sprout thorny vines that damage nearby foes',
    location: 'Greenpath, middle of area. Requires Mothwing Cloak',
    effects: ['Damages nearby enemies for the base Nail damage when hit']
  },
  {
    id: 'baldur-shell',
    image: '/hollow-knight/charms/baldur-shell.png',
    name: 'Baldur Shell',
    notchCost: 2,
    description:
      'Protects its bearer with a hard shell while focusing SOUL.\nThe shell is not indestructible and will shatter if it absorbs too much damage',
    location: 'Howling Cliffs, in a chest to the south',
    effects: ['Block up to 4 hits while using Focus']
  },
  {
    id: 'flukenest',
    image: '/hollow-knight/charms/flukenest.png',
    name: 'Flukenest',
    notchCost: 3,
    description:
      'Living charm born in the gut of a Flukemarm.\nTransforms the Vengeful Spirit spell into a horde of volatile baby flukes',
    location: 'Dropped by Flukemarm',
    effects: [
      'Replaces Vengeful Spirit with 9 flukes, and Shade Soul with 16 flukes',
      'Each fluke does 4 damage, resulting in a total damage of 36 with Vengeful Spirit and 64 with Shade Soul',
      'Unlocks a new interaction with Godmaster content Fluke Hermit'
    ],
    synergies: [
      {
        charmId: 'defenders-crest',
        effect:
          'Replaces the horde of Flukes with one massive volatile Fluke that deals 3 impact damage and explodes into a dung cloud that lasts 2.2 seconds and deals ~22 damage (~29 with Shaman Stone).'
      }
    ]
  },
  {
    id: 'defenders-crest',
    image: '/hollow-knight/charms/defenders-crest.png',
    name: "Defender's Crest",
    notchCost: 1,
    description:
      'Unique charm bestowed by the King of Hallownest to his most loyal knight. Scratched and dirty, but still cared for.\nCauses the bearer to emit a heroic odour',
    location: 'Dropped by Dung Defender',
    effects: [
      "Spawns toxic clouds that deal ~3 damage and last 1.1 seconds. A new one spawns at the Knight's location every 0.75 seconds",
      'Unlocks new interactions with certain NPCs'
    ],
    synergies: [
      {
        charmId: 'glowing-womb',
        effect:
          'Lowers Hatchling contact damage by 5, adding it back in the form of a 1-second dung cloud that does ~5 damage. Already spawned Hatchlings change only when entering another room.'
      },
      {
        charmId: 'flukenest',
        effect:
          'Replaces the horde of Flukes with one massive volatile Fluke that deals 3 impact damage and explodes into a dung cloud that lasts 2.2 seconds and deals ~22 damage (~29 with Shaman Stone).'
      },
      {
        charmId: 'spore-shroom',
        effect:
          "Defender's Crest increases the damage of the spore cloud, now dealing ~40 damage while still lasting 4.1 seconds. Also changes the visuals of the cloud."
      }
    ]
  },
  {
    id: 'glowing-womb',
    image: '/hollow-knight/charms/glowing-womb.png',
    name: 'Glowing Womb',
    notchCost: 2,
    description:
      'Drains the SOUL of its bearer and uses it to birth hatchlings.\nThe hatchlings have no desire to eat or live, and will sacrifice themselves to protect their parent',
    location: 'Forgotten Crossroads, east of the False Knight. Requires Crystal Heart',
    effects: [
      'Spawns Hatchlings for 8 SOUL each, that deal 9 damage to enemies on contact. A Hatchling spawns every 4 seconds with a maximum of 4 Hatchlings at a time'
    ],
    synergies: [
      {
        charmId: 'fury-of-the-fallen',
        effect:
          "Increases any spawned Hatchlings' contact damage by 5 when at 1 Mask. Already spawned Hatchlings change only when entering another room."
      },
      {
        charmId: 'defenders-crest',
        effect:
          'Lowers Hatchling contact damage by 5, adding it back in the form of a 1-second dung cloud that does ~5 damage. Already spawned Hatchlings change only when entering another room.'
      }
    ]
  },
  {
    id: 'quick-focus',
    image: '/hollow-knight/charms/quick-focus.png',
    name: 'Quick Focus',
    notchCost: 3,
    description:
      'A charm containing a crystal lens.\nIncreases the speed of focusing SOUL, allowing the bearer to heal damage faster',
    location: 'Sold by Salubra in Forgotten Crossroads for ![Geo](/hollow-knight/ui/geo.png) 800',
    effects: ['Focus ~33% faster'],
    synergies: [
      {
        charmId: 'shape-of-unn',
        effect: 'Doubles the movement speed of the Shape of Unn form (6.0 to 12.0).'
      }
    ]
  },
  {
    id: 'deep-focus',
    image: '/hollow-knight/charms/deep-focus.png',
    name: 'Deep Focus',
    notchCost: 4,
    description:
      'Naturally formed within a crystal over a long period. Draws in SOUL from the surrounding air.\nThe bearer will focus SOUL at a slower rate, but the healing effect will double',
    location: 'Crystal Peak, south of Cornifer. Requires Crystal Heart',
    effects: ['Focus heals 2 Masks of Health while increasing Focus time by 65%'],
    synergies: [
      {
        charmId: 'spore-shroom',
        effect: 'Increases the spore cloud radius by 35%.'
      }
    ]
  },
  {
    id: 'lifeblood-heart',
    image: '/hollow-knight/charms/lifeblood-heart.png',
    name: 'Lifeblood Heart',
    notchCost: 2,
    description:
      'Contains a living core that seeps precious lifeblood.\nWhen resting, the bearer will gain a coating of lifeblood that protects from a modest amount of damage',
    location: 'Sold by Salubra in Forgotten Crossroads for ![Geo](/hollow-knight/ui/geo.png) 250',
    effects: ['Adds 2 Lifeblood Masks when resting.']
  },
  {
    id: 'lifeblood-core',
    image: '/hollow-knight/charms/lifeblood-core.png',
    name: 'Lifeblood Core',
    notchCost: 3,
    description:
      'Contains a living core that bleeds precious lifeblood.\nWhen resting, the bearer will gain a coating of lifeblood that protects from a large amount of damage',
    location: "The Abyss, on the west wall. Requires 14 Lifeblood masks (15 if Joni's Blessing is equipped)",
    effects: ['Adds 4 Lifeblood Masks when resting.']
  },
  {
    id: 'jonis-blessing',
    image: '/hollow-knight/charms/jonis-blessing.png',
    name: "Joni's Blessing",
    notchCost: 4,
    description:
      'Blessed by Joni, the kindly heretic. Transfigures vital fluids into blue lifeblood.\nThe bearer will have a healthier shell and can take more damage, but they will not be able to heal themselves by focusing SOUL',
    location: "Joni's Repose",
    effects: [
      'Increase Masks by 40% (rounded up), all Masks become Lifeblood',
      'Causes Lifeseeds to flock to the Knight instead of running away'
    ],
    synergies: [
      {
        charmId: 'hiveblood',
        effect:
          "Hiveblood can regenerate Lifeblood Masks granted directly by Joni's Blessing, though it takes twice as long (20 seconds). Also changes the visuals of the Knight's Masks."
      }
    ]
  },
  {
    id: 'hiveblood',
    image: '/hollow-knight/charms/hiveblood.png',
    name: 'Hiveblood',
    notchCost: 4,
    description:
      "Golden nugget of the Hive's precious hardened nectar.\nHeals the bearer's wounds over time, allowing them to regain health without focusing SOUL",
    location: 'The Hive, south of Lifeblood content Hive Knight. Requires defeating Lifeblood content Hive Knight',
    effects: [
      'Passively heals the last unit of health lost after 10 seconds without taking further damage',
      'Makes the enemies inside the Hive passive'
    ],
    synergies: [
      {
        charmId: 'jonis-blessing',
        effect:
          "Hiveblood can regenerate Lifeblood Masks granted directly by Joni's Blessing, though it takes twice as long (20 seconds). Also changes the visuals of the Knight's Masks."
      }
    ]
  },
  {
    id: 'spore-shroom',
    image: '/hollow-knight/charms/spore-shroom.png',
    name: 'Spore Shroom',
    notchCost: 1,
    description:
      'Composed of living fungal matter. Scatters spores when exposed to SOUL.\nWhen focusing SOUL, emit a spore cloud that slowly damages enemies',
    location: "Fungal Wastes, west end, near the entrance to Queen's Gardens",
    effects: [
      'Focus releases a cloud of spores dealing ~26 damage over 4.1 seconds. It cannot be used again until either 4.25 seconds pass or the Knight takes damage',
      'Able to understand the dialogue of Mister Mushroom',
      "Able to read certain Lore Tablets found in Fungal Wastes and one in Kingdom's Edge"
    ],
    synergies: [
      {
        charmId: 'defenders-crest',
        effect:
          "Defender's Crest increases the damage of the spore cloud, now dealing ~40 damage while still lasting 4.1 seconds. Also changes the visuals of the cloud."
      },
      {
        charmId: 'deep-focus',
        effect: 'Increases the spore cloud radius by 35%.'
      }
    ]
  },
  {
    id: 'sharp-shadow',
    image: '/hollow-knight/charms/sharp-shadow.png',
    name: 'Sharp Shadow',
    notchCost: 2,
    description:
      "Contains a forbidden spell that transforms shadows into deadly weapons.\nWhen using Shadow Dash, the bearer's body will sharpen and damage enemies",
    location: 'Deepnest, southeast of the Hot Spring. Requires Shade Cloak',
    effects: [
      'Damages enemies for 1 x Nail damage when dashing through them',
      'When using Shade Cloak, increases shadow dash length by 40% (does not affect the regular Mothwing Cloak dashes)'
    ],
    synergies: [
      {
        charmId: 'dashmaster',
        effect:
          'Increases the damage dealt by the shadow to 1.5 x Nail damage. Does not affect charge or cooldown time.'
      }
    ]
  },
  {
    id: 'shape-of-unn',
    image: '/hollow-knight/charms/shape-of-unn.png',
    name: 'Shape of Unn',
    notchCost: 2,
    description:
      'Reveals the form of Unn within the bearer.\nWhile focusing SOUL, the bearer will take on a new shape and can move freely to avoid enemies',
    location: "Lake of Unn. Requires Isma's Tear",
    effects: ['Allows moving while focusing, and reduces hitbox height.'],
    synergies: [
      {
        charmId: 'quick-focus',
        effect: 'Doubles the movement speed of the Shape of Unn form (6.0 -> 12.0).'
      }
    ]
  },
  {
    id: 'nailmasters-glory',
    image: '/hollow-knight/charms/nailmasters-glory.png',
    name: "Nailmaster's Glory",
    notchCost: 1,
    description:
      "Contains the passion, skill and regrets of a Nailmaster.\nIncreases the bearer's mastery of Nail Arts, allowing them to focus their power faster and unleash arts sooner",
    location: 'Given by Sly in Dirtmouth after acquiring all 3 Nail Arts',
    effects: ['Reduces the charge time of Nail Arts by ~44%', 'Unlocks new interactions with certain NPCs']
  },
  {
    id: 'weaversong',
    image: '/hollow-knight/charms/weaversong.png',
    name: 'Weaversong',
    notchCost: 2,
    description:
      'Silken charm containing a song of farewell, left by the Weavers who departed Hallownest for their old home.\nSummons weaverlings to give the lonely bearer some companionship and protection',
    location: "Weavers' Den",
    effects: [
      'Summons 3 small Weaverlings that attack enemies for 3 damage per hit',
      'Unlocks new interactions with Midwife'
    ],
    synergies: [
      {
        charmId: 'sprintmaster',
        effect: 'Weaverlings move 50% faster.'
      },
      {
        charmId: 'grubsong',
        effect:
          "Weaverlings now give the Knight SOUL when they damage enemies (3 SOUL per hit), and can even collect SOUL from enemies that normally wouldn't give any from Nail hits (such as the Collector or Siblings). SOUL can also be collected after death, but before the screen transition, allowing the Knight to wake up at a Bench with SOUL."
      }
    ]
  },
  {
    id: 'dream-wielder',
    image: '/hollow-knight/charms/dream-wielder.png',
    name: 'Dream Wielder',
    notchCost: 1,
    description:
      'Transient charm created for those who wield the Dream Nail and collect Essence.\nAllows the bearer to charge the Dream Nail faster and collect more SOUL when striking foes',
    location: 'Given by Seer in Resting Grounds for gathering 500 Essence',
    effects: [
      'Gain +33 additional SOUL when hitting enemies with the Dream Nail (33 to 66)',
      'Reduces the time needed to attack with the Dream Nail by ~37.5%',
      'Increases the likelihood of receiving Essence when killing enemies by 50%'
    ],
    synergies: [
      {
        charmId: 'dreamshield',
        effect: 'The shield is 15% larger.'
      }
    ]
  },
  {
    id: 'dreamshield',
    image: '/hollow-knight/charms/dreamshield.png',
    name: 'Dreamshield',
    notchCost: 3,
    description:
      'Defensive charm once wielded by a tribe that could shape dreams.\nConjures a shield that follows the bearer and attempts to protect them',
    location: 'Resting Grounds, south of Seer',
    effects: [
      "Conjures a shield that slowly rotates around the Knight's position, blocks certain projectiles, and deals 1x Nail damage when colliding with an enemy"
    ],
    synergies: [
      {
        charmId: 'dream-wielder',
        effect: 'The shield is 15% larger.'
      }
    ]
  },
  {
    id: 'grimmchild',
    image: '/hollow-knight/charms/grimmchild.png',
    name: 'Grimmchild',
    notchCost: 2,
    description:
      "Worn by those who take part in the Grimm Troupe's Ritual.\nThe bearer must seek the Grimmkin and collect their flames. Uncollected flames will appear on the bearer's map",
    location: 'Given by Troupe Master Grimm in Dirtmouth',
    effects: [
      'Marks uncollected flames on the map',
      'Allows access to the Grimmkin',
      'Summons a flying companion that deals damage'
    ]
  },
  {
    id: 'void-heart',
    image: '/hollow-knight/charms/void-heart.png',
    name: 'Void Heart',
    notchCost: 0,
    description:
      "An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will.\nThis charm is a part of its bearer and can not be unequipped",
    location: 'Birthplace. Requires having Kingsoul equipped',
    effects: [
      'Unlocks 4 endings',
      'Prevents the non-Void Heart ending for the save file',
      'Renders the Siblings, Void Tendrils and Shade passive',
      'Allows access to the Radiance',
      'Allows access to the Godmaster content Pantheon of Hallownest',
      'Unlocks new interactions with certain NPCs'
    ]
  }
];
