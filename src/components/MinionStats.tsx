import Image from 'next/image';
import { MINIONS } from '@/data/minions';
import { useCharmCheck } from '@/hooks';
import { Minion } from '@/app/types';

function getMinionData(minionId: string) {
  const minion = MINIONS.find((m) => m.id === minionId);

  if (!minion) throw new Error(`Minion with id: ${minionId} not found`);

  return minion;
}

interface MinionInfoProps {
  minion: Minion;
}

const MinionInfo = ({ minion }: MinionInfoProps) => {
  const areMultiple = minion.quantity > 1;

  return (
    <div className="flex gap-2">
      <div className="flex size-25 items-center justify-center">
        <Image
          src={minion.image.data}
          alt={minion.name}
          width={minion.image.width}
          height={minion.image.height}
          className="drop-shadow-charm object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-base font-semibold">
          {minion.name}
          <span className="font-normal">{areMultiple && ` × ${minion.quantity}`}</span>
        </h3>
        <span>
          <output className="text-2xl">{minion.damage}</output>
          <span className="ml-1 text-sm text-gray-400">{areMultiple ? 'DMG/unit' : 'DMG'}</span>
        </span>
      </div>
    </div>
  );
};

const MinionStats = () => {
  const hasGlowingWomb = useCharmCheck('glowing-womb');
  const hasWeaversong = useCharmCheck('weaversong');
  const hasGrimmchild = useCharmCheck('grimmchild');

  const HATCHLING = getMinionData('hatchling');
  const WEAVERLING = getMinionData('weaverling');
  const GRIMMCHILD = getMinionData('grimmchild');

  return (
    <section>
      {hasGlowingWomb && <MinionInfo minion={HATCHLING} />}
      {hasWeaversong && <MinionInfo minion={WEAVERLING} />}
      {hasGrimmchild && <MinionInfo minion={GRIMMCHILD} />}
    </section>
  );
};

export default MinionStats;
