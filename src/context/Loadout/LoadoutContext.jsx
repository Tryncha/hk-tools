import { createContext, useReducer } from 'react';
import { loadoutReducer } from './loadoutReducer';

const LoadoutContext = createContext();

const initialLoadout = {
  nailLevel: 1,
  notchesUsed: 0,
  isOvercharmed: false,
  charms: [
    {
      id: 39,
      name: 'void-heart',
      notchesCost: 0,
      description: `An emptiness that was hidden within, now unconstrained. Unifies the void under the bearer's will.\nThis charm is a part of its bearer and can not be unequipped.`
    }
  ]
};

export const LoadoutProvider = ({ children }) => {
  const [loadout, loadoutDispatch] = useReducer(loadoutReducer, initialLoadout);

  console.log(loadout);

  function setNail(nailLevel) {
    loadoutDispatch({ type: 'SET_NAIL_LEVEL', payload: nailLevel });
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
