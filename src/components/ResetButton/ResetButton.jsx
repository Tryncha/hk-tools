import { useLoadout } from '../../hooks/useLoadout';
import './ResetButton.css';

const ResetButton = () => {
  const { resetLoadout } = useLoadout();
  return (
    <button
      className="ResetButton"
      onClick={resetLoadout}
    >
      Reset All
    </button>
  );
};

export default ResetButton;
