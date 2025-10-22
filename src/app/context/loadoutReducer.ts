import { Charm, Loadout, Nail } from '@/app/types';
import { MAX_NOTCHES } from '../constants';

export const debugLoadout = {
  nail: { id: 4, name: 'Pure Nail' },
  notchesUsed: 0,
  isOvercharmed: false,
  charms: [{ id: 39, name: 'Void Heart', notchesCost: 0 }],
  spells: [
    { id: 0, name: 'Vengeful Spirit' },
    { id: 1, name: 'Desolate Dive' },
    { id: 2, name: 'Howling Wraiths' },
    { id: 3, name: 'Shade Soul' },
    { id: 4, name: 'Descending Dark' },
    { id: 5, name: 'Abyss Shriek' },
    { id: 6, name: 'Flukelings' },
    { id: 7, name: 'Shade Flukelings' },
    { id: 8, name: 'Volatile Fluke' }
  ]
};

export const initialLoadout: Loadout = {
  nail: {
    id: 4,
    name: 'Pure Nail',
    description: 'The ultimate weapon of Hallownest. Crafted to perfection, this ancient nail reveals its true form.',
    level: 5,
    damage: 21,
    imgSrc: 'nails/pure-nail.png'
  },
  notchesUsed: 0,
  isOvercharmed: false,
  charms: [
    {
      id: 39,
      name: 'Void Heart',
      notchesCost: 0,
      description:
        "An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will.\nThis charm is a part of its bearer and can not be unequipped.",
      imgSrc: '/charms/39-void-heart.png'
    }
  ],
  spells: [
    {
      id: 3,
      name: 'Shade Soul',
      description:
        'Conjure a shadow that will fly forward and burn foes in its path.\nThe shadow requires SOUL to be conjured. Strike enemies to gather SOUL.',
      damage: {
        projectile: 30,
        total: 30
      },
      imgSrc: 'spells/shade-soul.png'
    },
    {
      id: 4,
      name: 'Descending Dark',
      description:
        'Strike the ground with a concentrated force of SOUL and Shadow. This force can destroy foes or break through fragile structures.\nThe force requires SOUL to be conjured. Strike enemies to gather SOUL.',
      damage: {
        dive: 15,
        firstShockwave: 30,
        secondShockwave: 15,
        total: 60
      },
      imgSrc: 'spells/descending-dark.png'
    },
    {
      id: 5,
      name: 'Abyss Shriek',
      description:
        'Blast foes with screaming SOUL and Shadow.\nThe Wraiths requires SOUL to be conjured. Strike enemies to gather SOUL.',
      damage: {
        hits: 4,
        perHit: 20,
        total: 80
      },
      imgSrc: 'spells/abyss-shriek.png'
    }
  ]
};

type LoadoutAction =
  | { type: 'SET_NAIL'; payload: Nail }
  | { type: 'SET_CHARM'; payload: Charm }
  | { type: 'RESET_CHARMS' }
  | { type: 'RESET_LOADOUT' };

export default function loadoutReducer(state: Loadout, action: LoadoutAction) {
  switch (action.type) {
    case 'SET_CHARM': {
      const charmToAdd = action.payload;
      if (charmToAdd.name === 'Void Heart') return state;

      let newCharms: Charm[] = [];

      if (!state.charms.map((c) => c.id).includes(charmToAdd.id) && state.notchesUsed < MAX_NOTCHES) {
        newCharms = state.charms.concat(charmToAdd);
      } else {
        newCharms = state.charms.filter((c) => c.id !== charmToAdd.id);
      }

      const newNotchesUsed = newCharms.reduce((acc, charm) => acc + charm.notchesCost, 0);
      const newIsOvercharmed = newNotchesUsed > MAX_NOTCHES;

      return {
        ...state,
        notchesUsed: newNotchesUsed,
        isOvercharmed: newIsOvercharmed,
        charms: newCharms
      };
    }

    case 'RESET_CHARMS': {
      return {
        ...state,
        charms: initialLoadout.charms,
        notchesUsed: 0
      };
    }

    case 'RESET_LOADOUT':
      return initialLoadout;

    default:
      return state;
  }
}
