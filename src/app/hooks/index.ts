'use client';

import { useContext } from 'react';
import LoadoutContext from '../context/LoadoutContext';

function useLoadout() {
  const loadoutContext = useContext(LoadoutContext);

  if (!loadoutContext) {
    throw new Error('useLoadout must be used within a LoadoutProvider');
  }

  return loadoutContext;
}

export default useLoadout;
