import { useLoadout } from '../../hooks/useLoadout';
import './Charm.css';

const Charm = ({ charmObj }) => {
  const { setCharm } = useLoadout();
  const { name, description } = charmObj;

  function handleClick() {
    setCharm(charmObj);
  }

  return (
    <div
      className="Charm"
      onClick={handleClick}
    >
      <img
        src={`charms/${name}.png`}
        alt={name}
        width={80}
        height={80}
        title={description}
      />
    </div>
  );
};

export default Charm;
