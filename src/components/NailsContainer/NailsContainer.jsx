import nailsData from '../../constants/nailsData.json';
import { useLoadout } from '../../hooks/useLoadout';
import './NailsContainer.css';

const NailsContainer = () => {
  const { loadout, setNail } = useLoadout();
  const { nail } = loadout;

  function handleClick(nailObj) {
    const newNail = { id: nailObj.id, name: nailObj.name };
    return () => setNail(newNail);
  }

  return (
    <section className="NailsContainer">
      {nailsData.map((nailObj) => {
        const { id, name, imgSrc } = nailObj;
        const isSelected = nail.id === id;

        return (
          <div
            key={id}
            className={isSelected ? 'Nail Nail--isSelected' : 'Nail'}
            onClick={handleClick(nailObj)}
          >
            <img
              src={imgSrc}
              height={270}
              alt={name}
              title={name}
            />
          </div>
        );
      })}
    </section>
  );
};

export default NailsContainer;
