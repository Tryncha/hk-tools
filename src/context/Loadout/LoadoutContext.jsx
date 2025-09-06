import { createContext, useReducer } from 'react';
import { initialLoadout, loadoutReducer } from './loadoutReducer';

const LoadoutContext = createContext();

export const LoadoutProvider = ({ children }) => {
  const [loadout, loadoutDispatch] = useReducer(loadoutReducer, initialLoadout);

  console.log(loadout);

  function setNail(newNail) {
    loadoutDispatch({ type: 'SET_NAIL', payload: newNail });
  }

  function setCharm(newCharm) {
    loadoutDispatch({ type: 'SET_CHARM', payload: newCharm });
  }

  function resetLoadout() {
    loadoutDispatch({ type: 'RESET_LOADOUT' });
  }

  const loadoutValue = {
    loadout,
    setNail,
    setCharm,
    resetLoadout
  };

  return <LoadoutContext.Provider value={loadoutValue}>{children}</LoadoutContext.Provider>;
};

export default LoadoutContext;
