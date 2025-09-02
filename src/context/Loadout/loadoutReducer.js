import { MAX_NOTCHES } from '../../constants';

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

    default:
      return state;
  }
}
