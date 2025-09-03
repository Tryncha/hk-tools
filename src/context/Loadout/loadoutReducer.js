import { MAX_NOTCHES } from '../../constants';

export const initialLoadout = {
  nail: {
    id: 4,
    name: 'pure-nail',
    description: 'The ultimate weapon of Hallownest. Crafted to perfection, this ancient nail reveals its true form.',
    level: 5,
    damage: 21
  },
  notchesUsed: 0,
  isOvercharmed: false,
  charms: [
    {
      id: 39,
      name: 'void-heart',
      notchesCost: 0,
      description: `An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will.\nThis charm is a part of its bearer and can not be unequipped.`
    }
  ],
  spells: [
    'Vengeful Spirit',
    'Desolate Dive',
    'Howling Wraiths',
    'Shade Soul',
    'Descending Dark',
    'Abyss Shriek',
    'Flukelings',
    'Shade Flukelings',
    'Volatile Fluke'
  ]
};

export function loadoutReducer(state, action) {
  switch (action.type) {
    case 'SET_NAIL':
      return {
        ...state,
        nail: action.payload
      };

    case 'SET_CHARMS': {
      const charmObj = action.payload;
      if (charmObj.name === 'void-heart') return state;

      let newCharms = [];

      const charmIds = state.charms.map((charm) => charm.id);

      if (!charmIds.includes(charmObj.id) && state.notchesUsed < MAX_NOTCHES) {
        newCharms = state.charms.concat(charmObj);
      } else {
        newCharms = state.charms.filter((charm) => charm.id !== charmObj.id);
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

    case 'RESET_LOADOUT':
      return initialLoadout;

    default:
      return state;
  }
}
