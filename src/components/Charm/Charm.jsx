import { useState } from 'react';
import { useLoadout } from '../../hooks/useLoadout';
import './Charm.css';

const CharmTooltip = ({ id, name, notchesCost, description, isHovering }) => {
  if (!isHovering) return null;

  return (
    <div className="CharmTooltip">
      <h3>{name}</h3>
      <div className="CharmTooltip-notchesContainer">
        {Array.from({ length: notchesCost }, (_, i) => (
          <img
            key={`notches-cost-${id}-${i + 1}`}
            src="ui/notch-cost-on.png"
            alt={`Notch #${i + 1}`}
            width={30}
            height={30}
          />
        ))}
      </div>
      <p>{description}</p>
    </div>
  );
};

const Charm = ({ charmObj, isSelected }) => {
  const { setCharm } = useLoadout();
  const { id, name, notchesCost, description, imgSrc } = charmObj;

  const [isHovering, setIsHovering] = useState(false);

  function handleClick() {
    const newCharm = { id: id, name: name, notchesCost: notchesCost };
    setCharm(newCharm);
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  return (
    <div className="CharmContainer">
      <CharmTooltip
        id={id}
        name={name}
        notchesCost={notchesCost}
        description={description}
        isHovering={isHovering}
      />
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
    </div>
  );
};

export default Charm;
