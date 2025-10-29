import Image from 'next/image';
import { useLoadout } from '@/hooks';
import { Spell } from '@/app/types';
import { useState } from 'react';
import Markdown from 'react-markdown';
import SideTooltip from './SideTooltip';

interface SpellTooltipProps {
  spell: Spell;
}

const SpellTooltip = ({ spell }: SpellTooltipProps) => {
  const { name, description, location } = spell;

  return (
    <SideTooltip>
      <div className="flex items-center justify-center gap-8 border-y border-gray-700 bg-gray-900 p-8">
        <div className="flex flex-col">
          <h3 className="mr-2 text-center text-lg font-bold">{name}</h3>
          <hr className="my-2 border-gray-700" />
          <span className="flex h-26 items-center justify-center px-4 text-center text-sm whitespace-pre-line text-gray-400 italic">
            <Markdown>{description}</Markdown>
          </span>
          <hr className="my-2 border-gray-700" />
          {location && (
            <span className="text-sm">
              <Markdown>{`**Location:** ${location}`}</Markdown>
            </span>
          )}
        </div>
      </div>
    </SideTooltip>
  );
};

interface NailContainerProps {
  spell: Spell;
  isReadOnly?: boolean;
}

const SpellContainer = ({ spell, isReadOnly }: NailContainerProps) => {
  const { loadout, setSpell } = useLoadout();
  const { spells } = loadout;

  const [isHovering, setIsHovering] = useState(false);

  const { name, image } = spell;

  const spellIds = spells.map((s) => s.id);
  const isEquipped = spellIds.includes(spell.id);

  function handleClick() {
    if (!isReadOnly) setSpell(spell);
  }

  return (
    <>
      {isHovering && <SpellTooltip spell={spell} />}
      <div
        onClick={handleClick}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`${!isReadOnly && isEquipped ? 'drop-shadow-charm opacity-50' : 'hover:drop-shadow-charm'} ${!isReadOnly && 'hover:cursor-pointer'} flex h-25 w-30 items-center justify-center`}
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

export default SpellContainer;
