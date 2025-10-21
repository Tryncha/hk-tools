import charmsData from '@/app/data/charms.json';
import Image from 'next/image';
import { type Charm } from '@/types.d';

const charms: Charm[] = charmsData;

const Charm = ({ charm }: { charm: Charm }) => {
  const { name, imgSrc } = charm;

  return (
    <div className="relative size-20">
      <Image
        src={imgSrc}
        alt={name}
        title={name}
        className="object-contain"
        fill
      />
    </div>
  );
};

const CharmListRow = ({ charmsToShow }: { charmsToShow: Charm[] }) => {
  return (
    <div className="flex gap-1 even:ml-10">
      {charmsToShow.map((c) => (
        <Charm
          key={c.id}
          charm={c}
        />
      ))}
    </div>
  );
};

const HomePage = () => {
  return (
    <main className="flex flex-col gap-1">
      <CharmListRow charmsToShow={charms.slice(0, 10)} />
      <CharmListRow charmsToShow={charms.slice(10, 20)} />
      <CharmListRow charmsToShow={charms.slice(20, 30)} />
      <CharmListRow charmsToShow={charms.slice(30, 40)} />
    </main>
  );
};

export default HomePage;
