'use client';

import type { Charm, Loadout } from '@/app/types';
import { createContext, useReducer } from 'react';
import loadoutReducer, { initialLoadout } from './loadoutReducer';

interface LoadoutContextType {
  loadout: Loadout;
  setCharm: (newCharm: Charm) => void;
  resetCharms: () => void;
  resetLoadout: () => void;
}

const LoadoutContext = createContext<LoadoutContextType | null>(null);

export const LoadoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadout, loadoutDispatch] = useReducer(loadoutReducer, initialLoadout);

  function setCharm(newCharm: Charm) {
    loadoutDispatch({ type: 'SET_CHARM', payload: newCharm });
  }

  function resetCharms() {
    loadoutDispatch({ type: 'RESET_CHARMS' });
  }

  function resetLoadout() {
    loadoutDispatch({ type: 'RESET_LOADOUT' });
  }

  console.log(loadout);

  const loadoutValue = {
    loadout,
    setCharm,
    resetCharms,
    resetLoadout
  };

  return <LoadoutContext.Provider value={loadoutValue}>{children}</LoadoutContext.Provider>;
};

export default LoadoutContext;
