import { createContext, useReducer } from 'react';
import { loadoutReducer } from './loadoutReducer';

const LoadoutContext = createContext();

const initialLoadout = {
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
  spells: []
};

export const LoadoutProvider = ({ children }) => {
  const [loadout, loadoutDispatch] = useReducer(loadoutReducer, initialLoadout);

  console.log(loadout);

  function setNail(nail) {
    loadoutDispatch({ type: 'SET_NAIL', payload: nail });
  }

  function setCharm(charmObj) {
    loadoutDispatch({ type: 'SET_CHARMS', payload: charmObj });
  }

  const loadoutValue = {
    loadout,
    setNail,
    setCharm
  };

  return <LoadoutContext.Provider value={loadoutValue}>{children}</LoadoutContext.Provider>;
};

export default LoadoutContext;
