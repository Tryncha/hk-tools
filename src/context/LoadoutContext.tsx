'use client';

import type { Charm, Loadout, Nail, Spell } from '@/app/types';
import { createContext, useReducer } from 'react';
import loadoutReducer, { getDefaultLoadout } from './loadoutReducer';

interface LoadoutContextType {
  loadout: Loadout;
  setNail: (newNail: Nail) => void;
  setSpell: (newSpell: Spell) => void;
  setCharm: (newCharm: Charm) => void;
  toggleLowHealth: () => void;
  resetCharms: () => void;
  resetLoadout: () => void;
}

const LoadoutContext = createContext<LoadoutContextType | null>(null);

export const LoadoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadout, loadoutDispatch] = useReducer(loadoutReducer, getDefaultLoadout());

  function setNail(newNail: Nail) {
    loadoutDispatch({ type: 'SET_NAIL', payload: newNail });
  }

  function setCharm(newCharm: Charm) {
    loadoutDispatch({ type: 'SET_CHARM', payload: newCharm });
  }

  function setSpell(newSpell: Spell) {
    loadoutDispatch({ type: 'SET_SPELL', payload: newSpell });
  }

  function toggleLowHealth() {
    loadoutDispatch({ type: 'TOGGLE_LOW_HEALTH' });
  }

  function resetCharms() {
    loadoutDispatch({ type: 'RESET_CHARMS' });
  }

  function resetLoadout() {
    loadoutDispatch({ type: 'RESET_LOADOUT' });
  }

  const loadoutValue = {
    loadout,
    setNail,
    setCharm,
    setSpell,
    toggleLowHealth,
    resetCharms,
    resetLoadout
  };

  return <LoadoutContext.Provider value={loadoutValue}>{children}</LoadoutContext.Provider>;
};

export default LoadoutContext;
