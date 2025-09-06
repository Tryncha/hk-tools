import charmsData from '../../data-json/charmsData.json';
import { useLoadout } from '../../hooks/useLoadout';
import Charm from '../Charm/Charm';
import './CharmList.css';

const CharmList = () => {
  const { loadout } = useLoadout();
  const { charms } = loadout;

  const charmIds = charms.map((charm) => charm.id);

  return (
    <section className="CharmList">
      <div className="CharmList-row">
        {charmsData.slice(0, 10).map((charmObj) => {
          const isSelected = charmIds.includes(charmObj.id);
          return (
            <Charm
              key={charmObj.id}
              charmObj={charmObj}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      <div className="CharmList-row">
        {charmsData.slice(10, 20).map((charmObj) => {
          const isSelected = charmIds.includes(charmObj.id);
          return (
            <Charm
              key={charmObj.id}
              charmObj={charmObj}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      <div className="CharmList-row">
        {charmsData.slice(20, 30).map((charmObj) => {
          const isSelected = charmIds.includes(charmObj.id);
          return (
            <Charm
              key={charmObj.id}
              charmObj={charmObj}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      <div className="CharmList-row">
        {charmsData.slice(30, 40).map((charmObj) => {
          const isSelected = charmIds.includes(charmObj.id);
          return (
            <Charm
              key={charmObj.id}
              charmObj={charmObj}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CharmList;
