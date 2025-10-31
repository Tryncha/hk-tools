import Image from 'next/image';
import { useState } from 'react';
import { useLoadout } from '../hooks';
import Markdown from 'react-markdown';
import { CHARMS } from '@/data/charms';
import { NotchesOn } from './Notches';
import MarkdownImageInline from './MarkdownImageInline';
import SideTooltip from './SideTooltip';
import type { Charm } from '../types.d';

const CharmContainer = ({ charm, isReadOnly }: { charm: Charm; isReadOnly?: boolean }) => {
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
            <div className="flex justify-center gap-2">
              <h3 className="text-lg font-bold">{name}</h3>
              <NotchesOn
                quantity={notchCost}
                size={28}
              />
            </div>
            <hr className="my-2 border-gray-700" />
            <span className="text-center text-sm whitespace-pre-line text-gray-400 italic">
              <Markdown>{description}</Markdown>
            </span>
            <hr className="my-2 border-gray-700" />
            <ul className="ml-4 list-disc">
              {effects.map((e) => (
                <li key={e}>
                  <MarkdownImageInline imageSize={16}>{e}</MarkdownImageInline>
                </li>
              ))}
            </ul>
            <hr className="my-2 border-gray-700" />
            <span className="text-sm">
              <MarkdownImageInline imageSize={16}>{`**Location:** ${location}`}</MarkdownImageInline>
            </span>
            {synergies && (
              <>
                <hr className="my-2 border-2 border-gray-700" />
                <h4 className="text-center font-bold">Synergies</h4>
                <hr className="my-2 border-gray-700" />
                <div className="flex flex-col gap-0">
                  {synergies.map((s) => {
                    const synergyCharm = CHARMS.find((c) => c.id === s.charmId);

                    if (!synergyCharm) throw new Error('Charm not found');

                    return (
                      <div
                        key={synergyCharm.id}
                        className="flex items-center border-y border-gray-700 py-2 first:border-t-0 first:pt-0 last:border-b-0 last:pb-0"
                      >
                        <Image
                          src={synergyCharm.image}
                          alt={synergyCharm.name}
                          width={48}
                          height={48}
                          className="mx-4 size-12"
                        />
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-2">
                            <h5 className="font-semibold">{synergyCharm.name}</h5>
                            <NotchesOn
                              quantity={synergyCharm.notchCost}
                              size={24}
                            />
                          </div>
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
