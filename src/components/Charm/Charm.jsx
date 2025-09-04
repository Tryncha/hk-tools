import { useRef, useState } from 'react';
import { useLoadout } from '../../hooks/useLoadout';
import './Charm.css';

const Charm = ({ charmObj, isSelected }) => {
  const { setCharm } = useLoadout();
  const { name, notchesCost, description, imgSrc } = charmObj;

  const [isHovering, setIsHovering] = useState(false);

  const charmRef = useRef(null);

  function handleClick() {
    setCharm(charmObj);
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div
      className={isSelected ? 'Charm Charm--isSelected' : 'Charm'}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imgSrc}
        alt={name}
        width={80}
        height={80}
        title={name}
        draggable={false}
      />
    </div>
  );
};

export default Charm;
