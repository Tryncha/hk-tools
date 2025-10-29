import Image from 'next/image';
import { useLoadout } from '@/hooks';
import { Nail } from '@/types';
import { useState } from 'react';
import Markdown from 'react-markdown';
import MarkdownImageInline from './MarkdownImageInline';
import SideTooltip from './SideTooltip';

const NailTooltip = ({ nail }: { nail: Nail }) => {
  const { name, description, cost, image, damage } = nail;

  return (
    <SideTooltip>
      <div className="flex items-center justify-center gap-8 border-y border-gray-700 bg-gray-900 p-8">
        <Image
          src={image.data}
          alt={name}
          width={image.width * 0.8}
          height={image.height * 0.8}
        />
        <div className="flex flex-col">
          <h3 className="mr-2 text-center text-lg font-bold">{name}</h3>
          <hr className="my-2 border-gray-700" />
          <span className="flex h-16 items-center justify-center px-4 text-center text-sm whitespace-pre-line text-gray-400 italic">
            <Markdown>{description}</Markdown>
          </span>
          <hr className="my-2 border-gray-700" />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm">
              <Markdown>{`**Base Damage:** ${damage}`}</Markdown>
            </span>
            {cost && (
              <span className="text-sm">
                <MarkdownImageInline imageSize={16}>{`**Cost:** ${cost}`}</MarkdownImageInline>
              </span>
            )}
          </div>
        </div>
      </div>
    </SideTooltip>
  );
};

const NailContainer = ({ nail, isReadOnly }: { nail: Nail; isReadOnly?: boolean }) => {
  const { loadout, setNail } = useLoadout();

  const [isHovering, setIsHovering] = useState(false);

  const { name, image } = nail;

  const isEquipped = loadout.nail.id === nail.id;

  function handleClick() {
    if (!isReadOnly) setNail(nail);
  }

  return (
    <>
      {isHovering && <NailTooltip nail={nail} />}
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`${!isReadOnly && isEquipped ? 'drop-shadow-charm opacity-50' : 'hover:drop-shadow-charm'} ${!isReadOnly && 'hover:cursor-pointer'} px-6`}
      >
        <Image
          src={image.data}
          alt={name}
          width={image.width}
          height={image.height}
        />
      </div>
    </>
  );
};

export default NailContainer;
