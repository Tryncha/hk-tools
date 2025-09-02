import { useLoadout } from '../../hooks/useLoadout';
import './NailsContainer.css';

const NailsContainer = () => {
  const { setNail } = useLoadout();

  return (
    <section className="NailsContainer">
      <div onClick={() => setNail(1)}>
        <img
          src="nails/00-old-nail.png"
          alt="Old Nail"
          title="Old Nail"
        />
      </div>
      <div onClick={() => setNail(2)}>
        <img
          src="nails/01-sharpened-nail.png"
          alt="Sharpened Nail"
          title="Sharpened Nail"
        />
      </div>
      <div onClick={() => setNail(3)}>
        <img
          src="nails/02-channelled-nail.png"
          alt="Channelled Nail"
          title="Channelled Nail"
        />
      </div>
      <div onClick={() => setNail(4)}>
        <img
          src="nails/03-coiled-nail.png"
          alt="Coiled Nail"
          title="Coiled Nail"
        />
      </div>
      <div onClick={() => setNail(5)}>
        <img
          src="nails/04-pure-nail.png"
          alt="Pure Nail"
          title="Pure Nail"
        />
      </div>
    </section>
  );
};

export default NailsContainer;
