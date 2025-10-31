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
    id: 'vengefly',
    name: 'Vengefly',
    health: 8,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/vengefly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'vengefly-king',
    name: 'Vengefly King',
    health: 55, // 100 (Trial of the Warrior)
    type: 'mini-boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/vengefly-king.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'gruzzer',
    name: 'Gruzzer',
    health: 8,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/gruzzer.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'gruz-mother',
    name: 'Gruz Mother',
    health: 90, // 140 (Trial of the Warrior)
    type: 'mini-boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/gruz-mother.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'tiktik',
    name: 'Tiktik',
    health: 8,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/tiktik.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'aspid-hunter',
    name: 'Aspid Hunter',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/aspid-hunter.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'aspid-mother',
    name: 'Aspid Mother',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/aspid-mother.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'aspid-hatchling',
    name: 'Aspid Hatchling',
    health: 8,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/aspid-hatchling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'goam',
    name: 'Goam',
    health: Infinity,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/goam.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'wandering-husk',
    name: 'Wandering Husk',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/wandering-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-hornhead',
    name: 'Husk Hornhead',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-hornhead.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'leaping-husk',
    name: 'Leaping Husk',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/leaping-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-bully',
    name: 'Husk Bully',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-bully.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-warrior',
    name: 'Husk Warrior',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-warrior.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-guard',
    name: 'Husk Guard',
    health: 70,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-guard.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'entombed-husk',
    name: 'Entombed Husk',
    health: 45,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/entombed-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'false-knight',
    name: 'False Knight',
    health: 355, // 65 Armor, 40 Maggot. Minimun to kill: 3 armor stages (3 * 65) + 4 head stages (4 * 40) = 355
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/false-knight.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'maggot',
    name: 'Maggot',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/maggot.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'menderbug',
    name: 'Menderbug',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/menderbug.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'lifeseed',
    name: 'Lifeseed',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/lifeseed.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'baldur',
    name: 'Baldur',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/baldur.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'elder-baldur',
    name: 'Elder Baldur',
    health: 60,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/elder-baldur.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mosscreep',
    name: 'Mosscreep',
    health: 10,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mosscreep.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mossfly',
    name: 'Mossfly',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mossfly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mosskin',
    name: 'Mosskin',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mosskin.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'volatile-mosskin',
    name: 'Voaltile Mosskin',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/volatile-mosskin.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'fool-eater',
    name: 'Fool Eater',
    health: 16,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/fool-eater.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'squit',
    name: 'Squit',
    health: 10,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/squit.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'obble',
    name: 'Obble',
    health: 10,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/obble.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'gulka',
    name: 'Gulka',
    health: 10,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/gulka.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'maskfly',
    name: 'Maskfly',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/maskfly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'moss-charger',
    name: 'Moss Charger',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/moss-charger.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'massive-moss-charger',
    name: 'Massive Moss Charger',
    health: 100,
    type: 'mini-boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/massive-moss-charger.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'moss-knight',
    name: 'Moss Knight',
    health: 50,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/moss-knight.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mossy-vagabond',
    name: 'Mossy Vagabond',
    health: 25,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mossy-vagabond.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'durandoo',
    name: 'Durandoo',
    health: 30,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/durandoo.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'duranda',
    name: 'Duranda',
    health: 30,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/duranda.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'aluba',
    name: 'Aluba',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/aluba.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'charged-lumafly',
    name: 'Charged Lumafly',
    health: Infinity,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/charged-lumafly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'uoma',
    name: 'Uoma',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/uoma.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'ooma',
    name: 'Ooma',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/ooma.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'uumuu',
    name: 'Uumuu',
    health: 300,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/uumuu.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'ambloom',
    name: 'Ambloom',
    health: 12,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/ambloom.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'fungling',
    name: 'Fungling',
    health: 10,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/fungling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'fungoon',
    name: 'Fungoon',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/fungoon.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'sporg',
    name: 'Sporg',
    health: 25,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/sporg.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'fungified-husk',
    name: 'Fungified Husk',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/fungified-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'shrumeling',
    name: 'Shrumeling',
    health: 5,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/shrumeling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'shrumal-warrior',
    name: 'Shrumal Warrior',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/shrumal-warrior.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'shrumal-ogre',
    name: 'Shrumal Ogre',
    health: 80,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/shrumal-ogre.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mantis-youth',
    name: 'Mantis Youth',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mantis-youth.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mantis-warrior',
    name: 'Mantis Warrior',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mantis-warrior.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mantis-lords',
    name: 'Mantis Lords',
    health: 530, // 210 first phase, 160 + 160 = 320 second phase
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mantis-lords.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-sentry',
    name: 'Husk Sentry',
    health: 28, // 28 sharpened nail, 25 old nail
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-sentry.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'heavy-sentry',
    name: 'Heavy Sentry',
    health: 35,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/heavy-sentry.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'winged-sentry',
    name: 'Winged Sentry',
    health: 25,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/winged-sentry.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'lance-sentry',
    name: 'Lance Sentry',
    health: 25,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/lance-sentry.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mistake',
    name: 'Mistake',
    health: 13,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mistake.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'folly',
    name: 'Folly',
    health: 13,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/folly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'soul-twister',
    name: 'Soul Twister',
    health: 35,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/soul-twister.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'soul-warrior',
    name: 'Soul Warrior',
    health: 180, // 300 Elegant Key room
    type: 'mini-boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/soul-warrior.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'soul-master',
    name: 'Soul Master',
    health: 385, // 275 first phase + 110 second phase
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/soul-master.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-dandy',
    name: 'Husk Dandy',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-dandy.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'cowardly-husk',
    name: 'Cowardly Husk',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/cowardly-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'gluttonous-husk',
    name: 'Gluttonous Husk',
    health: 30,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/gluttonous-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'gorgeous-husk',
    name: 'Gorgeous Husk',
    health: 220,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/gorgeous-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'great-husk-sentry',
    name: 'Great Husk Sentry',
    health: 170,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/great-husk-sentry.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'watcher-knights',
    name: 'Watcher Knights',
    health: 1560, // 6 * 220, 220, 220, 240, 260
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/watcher-knights.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'the-collector',
    name: 'The Collector',
    health: 850, // 750, 750, 750, 800, 850
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/the-collector.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'belfly',
    name: 'Belfly',
    health: 5,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/belfly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'pilflip',
    name: 'Pilflip',
    health: Infinity,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/pilflip.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hwurmp',
    name: 'Hwurmp',
    health: 25,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/hwurmp.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'bluggsac',
    name: 'Bluggsac',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/bluggsac.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'dung-defender',
    name: 'Dung Defender',
    health: 900, // 700, 750, 800, 850, 900
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/dung-defender.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'flukefey',
    name: 'Flukefey',
    health: 13, // 35 in Flukemarm
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/flukefey.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'flukemon',
    name: 'Flukemon',
    health: 55, // 25 + 15 + 15
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/flukemon.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'flukemarm',
    name: 'Flukemarm',
    health: 350,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/flukemarm.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'shardmite',
    name: 'Shardmite',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/shardmite.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'glimback',
    name: 'Glimback',
    health: 35,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/glimback.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'crystal-hunter',
    name: 'Crystal Hunter',
    health: 25,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/crystal-hunter.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'crystal-crawler',
    name: 'Crystal Crawler',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/crystal-crawler.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-miner',
    name: 'Husk Miner',
    health: 25,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-miner.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'crystallised-husk',
    name: 'Crystallised Husk',
    health: 35,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/crystallised-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'crystal-guardian',
    name: 'Crystal Guardian',
    health: 280,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/crystal-guardian.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'furious-vengefly',
    name: 'Furious Vengeful',
    health: 40,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/furious-vengefly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'volatile-gruzzer',
    name: 'Volatile Gruzzer',
    health: 40,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/volatile-gruzzer.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'violent-husk',
    name: 'Violent Husk',
    health: 40,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/violent-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'slobbering-husk',
    name: 'Slobbering Husk',
    health: 30,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/slobbering-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'dirtcarver',
    name: 'Dirtcarver',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/dirtcarver.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'carver-hatcher',
    name: 'Carver Hatcher',
    health: 35,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/carver-hatcher.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'garpede',
    name: 'Garpede',
    health: Infinity,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/garpede.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'corpse-creeper',
    name: 'Corpse Creeper',
    health: 18, // 15 after transformation
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/corpse-creeper.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'deepling',
    name: 'Deepling',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/deepling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'deephunter',
    name: 'Deephunter',
    health: 18,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/deephunter.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'little-weaver',
    name: 'Little Weaver',
    health: 30,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/little-weaver.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'stalking-devout',
    name: 'Stalking Devout',
    health: 100,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/stalking-devout.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'nosk',
    name: 'Nosk',
    health: 680,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/nosk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'shadow-creeper',
    name: 'Shadow Creeper',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/shadow-creeper.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'lesser-mawlek',
    name: 'Lesser Mawlek',
    health: 60,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/lesser-mawlek.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mawlurk',
    name: 'Mawlurk',
    health: 135,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mawlurk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'brooding-mawlek',
    name: 'Brooding Mawlek',
    health: 300,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/brooding-mawlek.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'lightseed',
    name: 'Lightseed',
    health: 1,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/lightseed.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'infected-balloon',
    name: 'Infected Balloon',
    health: 15,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/infected-balloon.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'broken-vessel',
    name: 'Broken Vessel',
    health: 525,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/broken-vessel.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'boofly',
    name: 'Boofly',
    health: 40,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/boofly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'primal-aspid',
    name: 'Primal Aspid',
    health: 35,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/primal-aspid.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hopper',
    name: 'Hopper',
    health: 50,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/hopper.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'great-hopper',
    name: 'Great Hopper',
    health: 130,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/great-hopper.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'grub-mimic',
    name: 'Grub Mimic',
    health: 45,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/grub-mimic.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hiveling',
    name: 'Hiveling',
    health: 18,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/hiveling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hive-soldier',
    name: 'Hive Soldier',
    health: 65,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/hive-soldier.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hive-guardian',
    name: 'Hive Guardian',
    health: 100,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/hive-guardian.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'husk-hive',
    name: 'Husk Hive',
    health: 60,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/husk-hive.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'spiny-husk',
    name: 'Spiny-husk',
    health: 44,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/spiny-husk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'loodle',
    name: 'Loodle',
    health: 30,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/loodle.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mantis-petra',
    name: 'Mantis Petra',
    health: 45,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mantis-petra.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'mantis-traitor',
    name: 'Mantis Traitor',
    health: 74,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/mantis-traitor.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'traitor-lord',
    name: 'Traitor Lord',
    health: 800,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/traitor-lord.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'sharp-baldur',
    name: 'Sharp Baldur',
    health: 65,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/sharp-baldur.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'armoured-squit',
    name: 'Armoured Squit',
    health: 40,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/armoured-squit.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'battle-obble',
    name: 'Battle Obble',
    health: 70,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/battle-obble.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'oblobble',
    name: 'Oblobble',
    health: 620, // 260 + 260 first phase, up to 300 second phase
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/oblobble.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'shielded-fool',
    name: 'Shielded Fool',
    health: 65,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/shielded-fool.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'sturdy-fool',
    name: 'Sturdy Fool',
    health: 80,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/sturdy-fool.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'winged-fool',
    name: 'Winged Fool',
    health: 70,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/winged-fool.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'heavy-fool',
    name: 'Heavy Fool',
    health: 90,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/heavy-fool.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'death-loodle',
    name: 'Death Loodle',
    health: 45,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/death-loodle.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'volt-twister',
    name: 'Volt Twister',
    health: 80,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/volt-twister.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'zote',
    name: 'Zote',
    health: 200,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/zote.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'god-tamer',
    name: 'God Tamer',
    health: 1050, // 600 Tamer, 450 Beast
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/god-tamer.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'xero',
    name: 'Xero',
    health: 570, // 200, 320, 416, 500, 570
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/xero.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'gorb',
    name: 'Gorb',
    health: 570,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/gorb.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'elder-hu',
    name: 'Elder Hu',
    health: 650,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/elder-hu.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'marmu',
    name: 'Marmu',
    health: 570,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/marmu.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'no-eyes',
    name: 'No Eyes',
    health: 570,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/no-eyes.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'galien',
    name: 'Galien',
    health: 640,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/galien.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'markoth',
    name: 'Markoth',
    health: 705,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/markoth.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'wingmould',
    name: 'Wingmould',
    health: Infinity,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/wingmould.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'royal-retainer',
    name: 'Royal Retainer',
    health: 5,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/royal-retainer.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'kingsmould',
    name: 'Knigsmould',
    health: 170,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/kingsmould.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'sibling',
    name: 'Sibling',
    health: 20,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/sibling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'void-tendrils',
    name: 'Void Tendrils',
    health: Infinity,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/void-tendrils.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hornet',
    name: 'Hornet',
    health: 225,
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/hornet.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hollow-knight',
    name: 'Hollow Knight',
    health: 1250, // 1000 + 250
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/hollow-knight.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'radiance',
    name: 'Radiance',
    health: 1700, // 350 + 400 + 250 + 700
    type: 'boss',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/radiance.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'shade',
    name: 'Shade',
    health: 84,
    type: 'normal',
    content: 'main-game',
    image: {
      data: '/hollow-knight/enemies/shade.png',
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
    id: 'winged-zoteling',
    name: 'Winged Zoteling',
    health: 20,
    type: 'normal',
    content: 'hidden-dreams',
    image: {
      data: '/hollow-knight/enemies/winged-zoteling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'hopping-zoteling',
    name: 'Hopping Zoteling',
    health: 20,
    type: 'normal',
    content: 'hidden-dreams',
    image: {
      data: '/hollow-knight/enemies/hopping-zoteling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'volatile-zoteling',
    name: 'Volatile Zoteling',
    health: 30,
    type: 'normal',
    content: 'hidden-dreams',
    image: {
      data: '/hollow-knight/enemies/volatile-zoteling.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'white-defender',
    name: 'White Defender',
    health: 1600,
    type: 'boss',
    content: 'hidden-dreams',
    image: {
      data: '/hollow-knight/enemies/white-defender.png',
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
    id: 'grimmkin-master',
    name: 'Grimmkin Master',
    health: 240,
    type: 'normal',
    content: 'grimm-troupe',
    image: {
      data: '/hollow-knight/enemies/grimmkin-master.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'grimmkin-nightmare',
    name: 'Grimmkin Nightmare',
    health: 320,
    type: 'normal',
    content: 'grimm-troupe',
    image: {
      data: '/hollow-knight/enemies/grimmkin-nightmare.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'grimm',
    name: 'Grimm',
    health: 1000,
    type: 'boss',
    content: 'grimm-troupe',
    image: {
      data: '/hollow-knight/enemies/grimm.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'nightmare-king',
    name: 'Nightmare King',
    health: 1500,
    type: 'boss',
    content: 'grimm-troupe',
    image: {
      data: '/hollow-knight/enemies/nightmare-king.png',
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
  },
  {
    id: 'pale-lurker',
    name: 'Pale Lurker',
    health: 400,
    type: 'normal',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/pale-lurker.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'winged-nosk',
    name: 'Winged Nosk',
    health: 750,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/winged-nosk.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'sisters-of-battle',
    name: 'Sisters of Battle',
    health: 2750,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/sisters-of-battle.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'nailmaster-oro',
    name: 'Nailmaster Oro',
    health: 1100,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/nailmaster-oro.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'nailmaster-mato',
    name: 'Nailmaster Mato',
    health: 1000,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/nailmaster-mato.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'paintmaster-sheo',
    name: 'Paintmaster Sheo',
    health: 950,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/paintmaster-sheo.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'great-nailsage-sly',
    name: 'Great Nailsage Sly',
    health: 1050,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/great-nailsage-sly.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'pure-vessel',
    name: 'Pure Vessel',
    health: 1600,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/pure-vessel.png',
      width: 52,
      height: 52
    }
  },
  {
    id: 'absolute-radiance',
    name: 'Absolute Radiance',
    health: 2181,
    type: 'boss',
    content: 'godmaster',
    image: {
      data: '/hollow-knight/enemies/absolute-radiance.png',
      width: 52,
      height: 52
    }
  }
];
