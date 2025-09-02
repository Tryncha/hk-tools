import './Corner.css';

const Corner = ({ direction }) => {
  return (
    <img
      className={`Corner Corner--${direction}`}
      src="ui/selection-corner.png"
    />
  );
};

export default Corner;
