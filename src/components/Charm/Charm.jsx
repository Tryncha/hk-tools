import { useLoadout } from '../../hooks/useLoadout';
import './Charm.css';

const Charm = ({ charmObj, isSelected }) => {
  const { setCharm } = useLoadout();

  const { name, description } = charmObj;

  function handleClick() {
    setCharm(charmObj);
  }

  return (
    <div
      className={isSelected ? 'Charm Charm--isSelected' : 'Charm'}
      onClick={handleClick}
    >
      <img
        src={`charms/${name}.png`}
        alt={name}
        width={80}
        height={80}
        title={description}
        draggable={false}
      />
    </div>
  );
};

export default Charm;
