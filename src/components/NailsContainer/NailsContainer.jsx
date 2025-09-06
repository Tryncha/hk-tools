import nailsData from '../../data-json/nailsData.json';
import { useLoadout } from '../../hooks/useLoadout';
import Nail from '../Nail/Nail';
import './NailsContainer.css';

const NailsContainer = () => {
  const { loadout } = useLoadout();
  const currentNail = loadout.nail;

  return (
    <section className="NailsContainer">
      {nailsData.map((nailObj) => (
        <Nail
          key={nailObj.id}
          nailObj={nailObj}
          size="lg"
          isSelected={currentNail.id === nailObj.id}
        />
      ))}
    </section>
  );
};

export default NailsContainer;
