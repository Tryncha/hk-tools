import { nailsData } from '../../constants/nailsData';
import { useLoadout } from '../../hooks/useLoadout';
import './NailsContainer.css';

const NailsContainer = () => {
  const { loadout, setNail } = useLoadout();
  const { nail } = loadout;

  return (
    <section className="NailsContainer">
      {nailsData.map((nailObj) => {
        const isSelected = nail.id === nailObj.id;
        return (
          <div
            className={isSelected ? 'Nail Nail--isSelected' : 'Nail'}
            onClick={() => setNail(nailObj)}
          >
            <img
              src={`nails/${nailObj.name}.png`}
              height={270}
              alt={nailObj.name}
              title={nailObj.name}
            />
          </div>
        );
      })}
    </section>
  );
};

export default NailsContainer;
