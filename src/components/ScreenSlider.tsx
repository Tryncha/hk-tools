'use client';

import { useState } from 'react';

interface ButtonSliderProps {
  children: React.ReactNode;
  position: 'left' | 'right';
  isSliderOpen: boolean;
  onClick: () => void;
}

const ButtonSlider = ({ children, position, isSliderOpen, onClick }: ButtonSliderProps) => {
  const leftStyles = `${isSliderOpen ? 'translate-x-[25vw]' : 'translate-x-0'} left-0 border-r`;
  const rightStyles = `${isSliderOpen ? '-translate-x-[25vw]' : '-translate-x-0'} right-0 border-l`;

  return (
    <button
      onClick={onClick}
      className={`${position === 'left' ? leftStyles : rightStyles} fixed top-1/2 z-10 h-12 w-8 -translate-y-1/2 border-y border-gray-700 bg-gray-900 transition-transform duration-800 ease-in-out hover:cursor-pointer`}
    >
      {children}
    </button>
  );
};

interface ScreenSliderProps {
  children: React.ReactNode;
  position: 'left' | 'right';
}

const ScreenSlider = ({ children, position }: ScreenSliderProps) => {
  const [isSliderOpen, setIsSliderOpen] = useState(position === 'right');

  const leftStyles = `${isSliderOpen ? 'translate-x-0' : '-translate-x-[25vw]'} left-0 scale-x-[-1]`;
  const rightStyles = `${isSliderOpen ? 'translate-x-0' : 'translate-x-[25vw]'} right-0 `;

  return (
    <section>
      <ButtonSlider
        onClick={() => setIsSliderOpen(!isSliderOpen)}
        isSliderOpen={isSliderOpen}
        position={position}
      >
        {position === 'left' ? (isSliderOpen ? '<-' : '->') : isSliderOpen ? '->' : '<-'}
      </ButtonSlider>
      <div
        className={`${position === 'left' ? leftStyles : rightStyles} fixed h-full w-[25vw] overflow-y-auto border-l border-gray-700 bg-gray-900 transition-transform duration-800 ease-in-out`}
      >
        <div className={`${position === 'left' && 'scale-x-[-1]'} `}>{children}</div>
      </div>
    </section>
  );
};

export default ScreenSlider;
