import { useLoadout } from '../../hooks/useLoadout';
import { calculateDPS, getNailData } from '../../utils';
import { SWING_SPEED } from '../../constants';
import Nail from '../Nail/Nail';
import './NailInfo.css';

const NailInfo = () => {
  const { loadout } = useLoadout();
  const { nail, charms } = loadout;

  const charmsNames = charms.map((charm) => charm.name);
  const hasQuickSlash = charmsNames.includes('quick-slash');

  const currentNailObj = getNailData(nail.id);

  return (
    <>
      <Nail
        nailObj={currentNailObj}
        size="md"
        isReadOnly
      />
      <div>
        <h3>Base </h3>
        <span className="u-numberText">{currentNailObj.damage}</span>
        <h3>DPS </h3>
        <span className="u-numberText">{calculateDPS(currentNailObj.damage, hasQuickSlash)}</span>
        <h3>Swing Speed </h3>
        <span className="u-numberText">{SWING_SPEED}s</span>
      </div>
    </>
  );
};

export default NailInfo;
