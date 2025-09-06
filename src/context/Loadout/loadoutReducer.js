import { MAX_NOTCHES } from '../../constants';

export const initialLoadout = {
  nail: { id: 4, name: 'Pure Nail' },
  notchesUsed: 0,
  isOvercharmed: false,
  charms: [{ id: 39, name: 'Void Heart' }],
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

export function loadoutReducer(state, action) {
  switch (action.type) {
    case 'SET_NAIL':
      return {
        ...state,
        nail: action.payload
      };

    case 'SET_CHARMS': {
      const charmObj = action.payload;
      if (charmObj.name === 'Void Heart') return state;

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
