import CurrentCharms from './components/CurrentCharms/CurrentCharms';
import MainTab from './components/MainTab/MainTab';
import KnightInfo from './components/KnightInfo/KnightInfo';

const App = () => {
  return (
    <main>
      <section>Enemies List</section>
      <section>
        <CurrentCharms />
        <hr className="u-mainHr" />
        <MainTab />
        <hr className="u-mainHr" />
        <KnightInfo />
      </section>
      <section>Loadout Info - Combos, etc</section>
    </main>
  );
};

export default App;
