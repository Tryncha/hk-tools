import { Charm, Loadout, Nail, Spell } from '@/app/types';
import { MAX_NOTCHES } from '../constants';
import { NAILS } from '../data/nails';
import { CHARMS } from '../data/charms';
import { SPELLS } from '../data/spells';

function GET_SPELL_DATA(spellId: string) {
  const SPELL_DATA = SPELLS.find((s) => s.id === spellId);
  if (!SPELL_DATA) throw new Error(`Spell with id: ${spellId} not found`);

  return SPELL_DATA;
}

export function getDefaultLoadout() {
  const DEFAULT_NAIL = NAILS.find((n) => n.id === 'pure-nail');
  const DEFAULT_CHARM = CHARMS.find((c) => c.id === 'void-heart');

  if (!DEFAULT_NAIL) throw new Error('DEFAULT_NAIL not found');
  if (!DEFAULT_CHARM) throw new Error('DEFAULT_CHARM not found');

  const DEFAULT_CHARMS = [DEFAULT_CHARM];

  const SHADE_SOUL = SPELLS.find((s) => s.id === 'shade-soul');
  const DESCENDING_DARK = SPELLS.find((s) => s.id === 'descending-dark');
  const ABYSS_SHRIEK = SPELLS.find((s) => s.id === 'abyss-shriek');

  if (!SHADE_SOUL) throw new Error('SHADE_SOUL not found');
  if (!DESCENDING_DARK) throw new Error('DESCENDING_DARK not found');
  if (!ABYSS_SHRIEK) throw new Error('ABYSS_SHRIEK not found');

  const DEFAULT_SPELLS = [SHADE_SOUL, DESCENDING_DARK, ABYSS_SHRIEK];

  const DEFAULT_LOADOUT: Loadout = {
    nail: DEFAULT_NAIL,
    notchesUsed: 0,
    isOvercharmed: false,
    isLowHealth: false,
    charms: DEFAULT_CHARMS,
    spells: DEFAULT_SPELLS
  };

  return DEFAULT_LOADOUT;
}

type LoadoutAction =
  | { type: 'SET_NAIL'; payload: Nail }
  | { type: 'SET_CHARM'; payload: Charm }
  | { type: 'SET_SPELL'; payload: Spell }
  | { type: 'TOGGLE_LOW_HEALTH' }
  | { type: 'RESET_CHARMS' }
  | { type: 'RESET_LOADOUT' };

export default function loadoutReducer(state: Loadout, action: LoadoutAction) {
  switch (action.type) {
    case 'SET_NAIL':
      return { ...state, nail: action.payload };

    case 'SET_CHARM': {
      const charmToAdd = action.payload;
      if (charmToAdd.name === 'Void Heart') return state;

      let newCharms: Charm[] = [];

      if (!state.charms.map((c) => c.id).includes(charmToAdd.id) && state.notchesUsed < MAX_NOTCHES) {
        newCharms = state.charms.concat(charmToAdd);
      } else {
        newCharms = state.charms.filter((c) => c.id !== charmToAdd.id);
      }

      const newNotchesUsed = newCharms.reduce((acc, charm) => acc + charm.notchCost, 0);
      const newIsOvercharmed = newNotchesUsed > MAX_NOTCHES;

      let newSpells: Spell[] = [];

      const newSpellIds = newCharms.map((c) => c.id);

      if (newSpellIds.includes('flukenest')) {
        const oldSpellIds = state.spells.map((s) => s.id);

        if (newSpellIds.includes('defenders-crest')) {
          newSpells = state.spells.toSpliced(0, 1, GET_SPELL_DATA('volatile-fluke'));
        } else if (oldSpellIds.includes('shade-soul')) {
          newSpells = state.spells.toSpliced(0, 1, GET_SPELL_DATA('shade-flukelings'));
        } else {
          newSpells = state.spells.toSpliced(0, 1, GET_SPELL_DATA('flukelings'));
        }
      } else {
        newSpells = state.spells.toSpliced(0, 1, GET_SPELL_DATA('shade-soul'));
      }

      const newLoadout: Loadout = {
        ...state,
        notchesUsed: newNotchesUsed,
        isOvercharmed: newIsOvercharmed,
        charms: newCharms,
        spells: newSpells
      };

      return newLoadout;
    }

    case 'SET_SPELL': {
      const spellToAdd = action.payload;

      let newSpells: Spell[] = [];

      if (spellToAdd.id === 'vengeful-spirit') {
        newSpells = state.spells.toSpliced(0, 1, spellToAdd);
      }

      if (spellToAdd.id === 'desolate-dive') {
        newSpells = state.spells.toSpliced(1, 1, spellToAdd);
      }

      if (spellToAdd.id === 'howling-wraiths') {
        newSpells = state.spells.toSpliced(2, 1, spellToAdd);
      }

      if (spellToAdd.id === 'shade-soul') {
        newSpells = state.spells.toSpliced(0, 1, spellToAdd);
      }

      if (spellToAdd.id === 'descending-dark') {
        newSpells = state.spells.toSpliced(1, 1, spellToAdd);
      }

      if (spellToAdd.id === 'abyss-shriek') {
        newSpells = state.spells.toSpliced(2, 1, spellToAdd);
      }

      return { ...state, spells: newSpells };
    }

    case 'TOGGLE_LOW_HEALTH':
      return {
        ...state,
        isLowHealth: !state.isLowHealth
      };

    case 'RESET_CHARMS': {
      return {
        ...state,
        charms: getDefaultLoadout().charms,
        notchesUsed: 0
      };
    }

    case 'RESET_LOADOUT':
      return getDefaultLoadout();

    default:
      return state;
  }
}
