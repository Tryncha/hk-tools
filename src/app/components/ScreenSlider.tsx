'use client';

import { useState } from 'react';

interface ButtonSliderProps {
  children: React.ReactNode;
  position: 'left' | 'right';
  isSliderOpen: boolean;
  onClick: () => void;
}

const ButtonSlider = ({ children, position, isSliderOpen, onClick }: ButtonSliderProps) => {
  const leftStyles = `${isSliderOpen ? 'translate-x-130' : 'translate-x-2'} left-0 border-r`;
  const rightStyles = `${isSliderOpen ? '-translate-x-130' : '-translate-x-2'} right-0 border-l`;

  return (
    <button
      onClick={onClick}
      className={`${position === 'left' ? leftStyles : rightStyles} fixed top-1/2 h-12 w-8 -translate-y-1/2 border-y border-gray-700 transition-transform duration-1000 ease-in-out hover:cursor-pointer`}
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
  const [isSliderOpen, setIsSliderOpen] = useState(true);

  const leftStyles = `${isSliderOpen ? 'translate-x-0' : '-translate-x-128'} left-0 border-r pr-2`;
  const rightStyles = `${isSliderOpen ? 'translate-x-0' : 'translate-x-128'} right-0 border-l pl-2`;

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
        className={`${position === 'left' ? leftStyles : rightStyles} fixed h-full w-130 overflow-y-auto border-gray-700 transition-transform duration-1000 ease-in-out`}
      >
        {children}
      </div>
    </section>
  );
};

export default ScreenSlider;
