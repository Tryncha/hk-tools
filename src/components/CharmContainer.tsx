import Image from 'next/image';
import type { Charm } from '@/app/types';
import { useLoadout } from '@/hooks';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { CHARMS } from '@/data/charms';
import { NotchesOn } from './Notches';
import MarkdownImageInline from './MarkdownImageInline';
import SideTooltip from './SideTooltip';

interface CharmContainerProps {
  charm: Charm;
  isReadOnly?: boolean;
}

const CharmContainer = ({ charm, isReadOnly }: CharmContainerProps) => {
  const { loadout, setCharm } = useLoadout();
  const { charms } = loadout;

  const [isHovering, setIsHovering] = useState(false);

  const { name, image, description, location, notchCost, effects, synergies } = charm;

  const isEquipped = charms.map((c) => c.id).includes(charm.id);

  function handleClick() {
    setCharm(charm);
  }

  return (
    <>
      {isHovering && (
        <SideTooltip>
          <div className="border-y border-gray-700 bg-gray-900 p-4">
            <div className="flex items-center justify-center">
              <h3 className="mr-2 text-lg font-bold">{name}</h3>
              <NotchesOn
                quantity={notchCost}
                size={30}
              />
            </div>
            <span className="text-center text-sm whitespace-pre-line text-gray-400 italic">
              <Markdown>{description}</Markdown>
            </span>
            <div>
              <h3 className="font-bold">Effects</h3>
              <ul className="ml-4 list-disc">
                {effects.map((e) => (
                  <li key={e}>
                    <MarkdownImageInline imageSize={16}>{e}</MarkdownImageInline>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="my-2 border-gray-500" />
            <span className="text-sm">
              <MarkdownImageInline imageSize={16}>{`**Location:** ${location}`}</MarkdownImageInline>
            </span>
            {synergies && (
              <>
                <hr className="my-2 border-gray-500" />
                <h4 className="mb-2 font-bold">Synergies</h4>
                <div className="flex flex-col gap-2">
                  {synergies.map((s) => {
                    const synergyCharm = CHARMS.find((c) => c.id === s.charmId);

                    if (!synergyCharm) throw new Error('Charm not found');

                    return (
                      <div
                        key={synergyCharm.id}
                        className="flex items-center border-l-3 border-gray-500"
                      >
                        <Image
                          src={synergyCharm.image}
                          alt={synergyCharm.name}
                          width={48}
                          height={48}
                          className="mx-4 size-12"
                        />
                        <div className="flex flex-col">
                          <h5 className="font-semibold">{synergyCharm.name}</h5>
                          <span className="text-sm">{s.effect}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </SideTooltip>
      )}
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`${!isReadOnly && isEquipped ? 'drop-shadow-charm opacity-50' : 'hover:drop-shadow-charm'} flex size-18 items-center justify-center p-0.5 hover:cursor-pointer`}
      >
        <Image
          src={image}
          alt={name}
          width={72}
          height={72}
          priority
        />
      </div>
    </>
  );
};

export default CharmContainer;
