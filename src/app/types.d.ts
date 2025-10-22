export interface Loadout {
  nail: Nail;
  notchesUsed: number;
  isOvercharmed: boolean;
  charms: Charm[];
  spells: [ShadeSoul, DescendingDark, AbyssShriek];
}

export interface Nail {
  id: number;
  name: string;
  imgSrc: string;
  description: string;
  level: number;
  damage: number;
}

export interface Charm {
  id: number;
  name: string;
  imgSrc: string;
  description: string;
  notchesCost: number;
}

export interface Spell {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
}

export interface ShadeSoul extends Spell {
  damage: {
    projectile: number;
    total: number;
  };
}

export interface DescendingDark extends Spell {
  damage: {
    dive: number;
    firstShockwave: number;
    secondShockwave: number;
    total: number;
  };
}

export interface AbyssShriek extends Spell {
  damage: {
    hits: number;
    perHit: number;
    total: number;
  };
}
