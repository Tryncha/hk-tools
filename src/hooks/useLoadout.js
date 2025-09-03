import { useContext } from 'react';
import LoadoutContext from '../context/Loadout/LoadoutContext';

export function useLoadout() {
  const { loadout, setNail, setCharm, resetLoadout } = useContext(LoadoutContext);
  return { loadout, setNail, setCharm, resetLoadout };
}
