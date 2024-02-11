// src/components/Filter.tsx
import React, { useState } from 'react';

interface FilterProps {
  icon: string;
  text: string;
}

const Filter: React.FC<FilterProps> = ({ icon, text }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center p-1 lg:px-2 lg:py-2 mx-1 rounded-lg lg:rounded-full ${
        selected
          ? 'border-blue-400 bg-blue-100'
          : 'border-gray-300 bg-gray-100'
      } border`}
    >
      <img src={icon} alt="Icon" className="h-2 md:h-4 mr-2" />
      <span className=' font-light text-[10px] lg:text-sm flex-shrink-0'>{text}</span>
    </button>
  );
};

export default Filter;
