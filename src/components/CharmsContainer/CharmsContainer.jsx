import { charmsData } from '../../constants/charmsData';
import Charm from '../Charm/Charm';
import './CharmsContainer.css';

const CharmsContainer = () => {
  return (
    <section className="CharmsContainer">
      <div className="Charms-row">
        {charmsData.slice(0, 10).map((charmObj) => (
          <Charm
            key={charmObj.id}
            charmObj={charmObj}
          />
        ))}
      </div>
      <div className="Charms-row">
        {charmsData.slice(10, 20).map((charmObj) => (
          <Charm
            key={charmObj.id}
            charmObj={charmObj}
          />
        ))}
      </div>
      <div className="Charms-row">
        {charmsData.slice(20, 30).map((charmObj) => (
          <Charm
            key={charmObj.id}
            charmObj={charmObj}
          />
        ))}
      </div>
      <div className="Charms-row">
        {charmsData.slice(30, 40).map((charmObj) => (
          <Charm
            key={charmObj.id}
            charmObj={charmObj}
          />
        ))}
      </div>
    </section>
  );
};

export default CharmsContainer;
