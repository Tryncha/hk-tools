import { Synergy } from '../app/types';

export const SYNERGIES: Synergy[] = [
  {
    id: 'dashmaster-sharp-shadow',
    charmIds: ['dashmaster', 'sharp-shadow'],
    effect: 'Increases the damage dealt by the shadow to 1.5 x Nail damage. Does not affect charge or cooldown time'
  },
  {
    id: 'dashmaster-sprintmaster',
    charmIds: ['dashmaster', 'sprintmaster'],
    effect: 'Further increases the movement speed bonus to 39%'
  },
  {
    id: 'weaversong-sprintmaster',
    charmIds: ['weaversong', 'sprintmaster'],
    effect: 'Weaverlings move 50% faster'
  },
  {
    id: 'grubsong-weaversong',
    charmIds: ['grubsong', 'weaversong'],
    effect:
      "Weaverlings now give the Knight SOUL when they damage enemies (3 SOUL per hit), and can even collect SOUL from enemies that normally wouldn't give any from Nail hits (such as the Collector or Siblings). SOUL can also be collected after death, but before the screen transition, allowing the Knight to wake up at a Bench with SOUL"
  },
  {
    id: 'grubsong-grubberflys-elegy',
    charmIds: ['grubsong', 'grubberflys-elegy'],
    effect: 'Increases the amount of SOUL received when taking damage from 15 to 25'
  },
  {
    id: 'mark-of-pride-grubberflys-elegy',
    charmIds: ['mark-of-pride', 'grubberflys-elegy'],
    effect: "Increases the height of the projectiles from Grubberfly's Elegy by 35%"
  },
  {
    id: 'fury-of-the-fallen-grubberflys-elegy',
    charmIds: ['fury-of-the-fallen', 'grubberflys-elegy'],
    effect:
      "Fires red projectiles at one Mask, dealing ~67.5% Nail damage per projectile. Note that this works only when the Knight has only 1 Mask left (No projectiles are sent at 1 Mask if Fury of the Fallen is not equipped). While at one Mask, gaining any Lifeblood Masks negates the effect of Grubberfly's Elegy but not the effect of Fury of the Fallen"
  },
  {
    id: 'fury-of-the-fallen-glowing-womb',
    charmIds: ['fury-of-the-fallen', 'glowing-womb'],
    effect:
      "Increases any spawned Hatchlings' contact damage by 5 when at 1 Mask. Already spawned Hatchlings change only when entering another room"
  },
  {
    id: 'defenders-crest-glowing-womb',
    charmIds: ['defenders-crest', 'glowing-womb'],
    effect:
      'Lowers Hatchling contact damage by 5, adding it back in the form of a 1-second dung cloud that does ~5 damage. Already spawned Hatchlings change only when entering another room'
  },
  {
    id: 'defenders-crest-flukenest',
    charmIds: ['defenders-crest', 'flukenest'],
    effect:
      'Replaces the horde of Flukes with one massive volatile Fluke that deals 3 impact damage and explodes into a dung cloud that lasts 2.2 seconds and deals ~22 damage (~29 with Shaman Stone)'
  },
  {
    id: 'defenders-crest-spore-shroom',
    charmIds: ['defenders-crest', 'spore-shroom'],
    effect:
      "Defender's Crest increases the damage of the spore cloud, now dealing ~40 damage while still lasting 4.1 seconds. Also changes the visuals of the cloud"
  },
  {
    id: 'deep-focus-spore-shroom',
    charmIds: ['deep-focus', 'spore-shroom'],
    effect: 'Increases the spore cloud radius by 35%'
  },
  {
    id: 'quick-focus-shape-of-unn',
    charmIds: ['quick-focus', 'shape-of-unn'],
    effect: 'Doubles the movement speed of the Shape of Unn form (6.0 -> 12.0)'
  },
  {
    id: 'jonis-blessing-hiveblood',
    charmIds: ['jonis-blessing', 'hiveblood'],
    effect:
      "Hiveblood can regenerate Lifeblood Masks granted directly by Joni's Blessing, though it takes twice as long (20 seconds). Also changes the visuals of the Knight's Masks"
  },
  {
    id: 'dream-wielder-dreamshield',
    charmIds: ['dream-wielder', 'dreamshield'],
    effect: '	The shield is 15% larger'
  }
];
