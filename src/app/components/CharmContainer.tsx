import Image from 'next/image';
import type { Charm } from '../types.d';
import useLoadout from '../hooks';

interface CharmContainerProps {
  charm: Charm;
  isSelected?: boolean;
}

const CharmContainer = ({ charm, isSelected }: CharmContainerProps) => {
  const { name, imgSrc } = charm;

  const { setCharm } = useLoadout();

  return (
    <div
      onClick={() => setCharm(charm)}
      className={`${isSelected ? 'drop-shadow-charm opacity-50' : 'hover:drop-shadow-charm'} hover:cursor-pointer`}
    >
      <Image
        src={imgSrc}
        alt={name}
        title={name}
        width={80}
        height={80}
        className="size-20"
        priority
      />
    </div>
  );
};

export default CharmContainer;
