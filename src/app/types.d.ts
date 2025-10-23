import { StaticImageData } from 'next/image';

export interface Loadout {
  nail: Nail;
  notchesUsed: number;
  isOvercharmed: boolean;
  charms: Charm[];
  spells: Spell[];
}

export interface Image {
  data: StaticImageData;
  width: number;
  height: number;
}

export interface Nail {
  id: string;
  name: string;
  description: string;
  level: number;
  damage: number;
  image: Image;
}

export interface CharmSynergy {
  charmId: string;
  effect: string;
}

export interface Charm {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  notchCost: number;
  effects: string[];
  synergies?: CharmSynergy[];
}

export interface SpellBase {
  id: number;
  description: string;
  imgSrc: string;
}

export interface VengefulSpirit extends SpellBase {
  name: 'Vengeful Spirit';
  damage: {
    projectile: number;
    total: number;
  };
}

export interface DesolateDive extends SpellBase {
  name: 'Desolate Dive';
  damage: {
    dive: number;
    shockwave: number;
    total: number;
  };
}

export interface HowlingWraiths extends SpellBase {
  name: 'Howling Wraiths';
  damage: {
    hits: number;
    perHit: number;
    total: number;
  };
}

export interface ShadeSoul extends SpellBase {
  name: 'Shade Soul';
  damage: {
    projectile: number;
    total: number;
  };
}

export interface DescendingDark extends SpellBase {
  name: 'Descending Dark';
  damage: {
    dive: number;
    firstShockwave: number;
    secondShockwave: number;
    total: number;
  };
}

export interface AbyssShriek extends SpellBase {
  name: 'Abyss Shriek';
  damage: {
    hits: number;
    perHit: number;
    total: number;
  };
}

export interface Flukelings extends SpellBase {
  name: 'Flukelings';
  damage: {
    flukes: number;
    perHit: number;
  };
}

export interface ShadeFlukelings extends SpellBase {
  name: 'Shade Flukelings';
  damage: {
    flukes: number;
    perHit: number;
  };
}
export interface VolatileFluke extends SpellBase {
  name: 'Volatile Fluke';
  damage: {
    impact: number;
    cloud: number;
    time: number;
  };
}

export type Spell =
  | VengefulSpirit
  | DesolateDive
  | HowlingWraiths
  | ShadeSoul
  | DescendingDark
  | AbyssShriek
  | Flukelings
  | ShadeFlukelings
  | VolatileFluke;

export interface NailArt {
  id: number;
  name: string;
  description: string;
  damagePerNailLevel: number[];
  imgSrc: string;
}
