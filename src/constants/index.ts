export const MAX_NOTCHES = 11;
export const SWING_SPEED = 0.41;
export const QUICK_SWING_SPEED = 0.25;

export const HEALTH_DATA = {
  MAX: 9
};

export const SOUL_DATA = {
  MAX: {
    BASE: 99,
    PER_VESSEL: 33
  },
  COST: 33,
  GAIN: {
    PER_ATTACK: 11,
    PER_HIT: 0
  }
};

const isProd = process.env.NODE_ENV === 'production';
export const BASE_PATH = isProd ? '/hollow-bench' : '';
