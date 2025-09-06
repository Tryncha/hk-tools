import { useState } from 'react';
import './Nail.css';
import { useLoadout } from '../../hooks/useLoadout';

const NailTooltip = ({ name, description, damage, isHovering }) => {
  if (!isHovering) return null;

  return (
    <div className="NailTooltip">
      <h3>{name}</h3>
      <span>{damage} DMG</span>
      <p>{description}</p>
    </div>
  );
};

const Nail = ({ nailObj, size, isSelected, isReadOnly }) => {
  const { setNail } = useLoadout();
  const { id, name, description, damage, imgSrc } = nailObj;

  const SIZES = {
    md: 180,
    lg: 270
  };

  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  function handleClick() {
    const newNail = { id: id, name: name };
    setNail(newNail);
  }

  return (
    <div className="NailContainer">
      <NailTooltip
        name={name}
        description={description}
        damage={damage}
        isHovering={isHovering}
      />
      <div
        className={isSelected ? 'Nail Nail--isSelected' : isReadOnly ? 'Nail Nail--isReadOnly' : 'Nail'}
        onClick={isReadOnly ? null : handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={imgSrc}
          alt={name}
          height={SIZES[size]}
        />
      </div>
    </div>
  );
};

export default Nail;
