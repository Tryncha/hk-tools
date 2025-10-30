import type { Enemy } from '../types.d';

export const ENEMIES: Enemy[] = [
  {
    id: 'crawlid',
    name: 'Crawlid',
    health: 8,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/crawlid.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'grey-prince-zote',
    name: 'Grey Prince Zote',
    health: 1200,
    type: 'boss',
    content: 'hidden-dreams',
    image: {
      data: '/hollow-knight/enemies/grey-prince-zote.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'grimmkin-novice',
    name: 'Grimmkin Novice',
    health: 160,
    type: 'normal',
    content: 'grimm-troupe',
    image: {
      data: '/hollow-knight/enemies/grimmkin-novice.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hive-knight',
    name: 'Hive Knight',
    health: 920,
    type: 'boss',
    content: 'lifeblood',
    image: {
      data: '/hollow-knight/enemies/hive-knight.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'flukemunga',
    name: 'Flukemunga',
    health: 150,
    type: 'normal',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/flukemunga.png',
      width: 52,
      height: 52
    }
  }
];
