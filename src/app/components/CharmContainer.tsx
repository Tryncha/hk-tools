import Image from 'next/image';
import type { Charm } from '../types.d';
import useLoadout from '../hooks';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { CHARMS } from '../data/charms';
import { NotchesOn } from './Notches';

interface MarkdownImageInlineProps {
  children: string;
  imageSize: number;
}

const MarkdownImageInline = ({ children, imageSize }: MarkdownImageInlineProps) => {
  return (
    <Markdown
      components={{
        img: ({ ...props }) => {
          const src = typeof props.src === 'string' ? props.src : '';
          const alt = typeof props.alt === 'string' ? props.alt : '';

          return (
            <Image
              src={src}
              alt={alt}
              width={imageSize}
              height={imageSize}
              className="inline-block align-text-bottom"
            />
          );
        }
      }}
    >
      {children}
    </Markdown>
  );
};

interface CharmContainerProps {
  charm: Charm;
  isSelected?: boolean;
}

const CharmContainer = ({ charm, isSelected }: CharmContainerProps) => {
  const { name, image, description, location, notchCost, effects, synergies } = charm;

  const { setCharm } = useLoadout();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      {isHovering && (
        <>
          <div className="fixed top-0 left-0 z-10 flex h-screen w-130 flex-col justify-center gap-2 overflow-y-auto border-l border-gray-700 bg-gray-900/80 backdrop-blur-md transition-all">
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
                      <Markdown>{e}</Markdown>
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
                            width={50}
                            height={50}
                            className="mx-4"
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
          </div>
        </>
      )}
      <div
        onClick={() => setCharm(charm)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`${isSelected ? 'drop-shadow-charm opacity-50' : 'hover:drop-shadow-charm'} p-0.5 hover:cursor-pointer`}
      >
        <Image
          src={image}
          alt={name}
          width={72}
          height={72}
          className="size-18"
          priority
        />
      </div>
    </>
  );
};

export default CharmContainer;
