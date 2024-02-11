import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface RangeSliderProps {
  initialRange: [number, number];
  onChange: (value: [number, number]) => void;
  isButtonSelected: boolean;
  onButtonDeselect: () => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ initialRange, onChange, isButtonSelected, onButtonDeselect }) => {
  const [range, setRange] = useState<[number, number]>(initialRange);

  // Update local state when props change
  useEffect(() => {
    setRange(initialRange);
  }, [initialRange]);

  const handleLeftInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value >= 0 && value <= range[1] - 0.5) {
      setRange([value, range[1]]);
      onChange([value, range[1]]);
      onButtonDeselect(); // Deselect button when input changes
    }
  };

  const handleRightInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value) && value <= 25 && value >= range[0] + 0.5) {
      setRange([range[0], value]);
      onChange([range[0], value]);
      onButtonDeselect(); // Deselect button when input changes
    }
  };

  const handleChange = (value: number | number[]) => {
    setRange(value as [number, number]);
    onChange(value as [number, number]);
    onButtonDeselect(); // Deselect button when slider changes
  };

  const customSliderStyle = {
    rail: { backgroundColor: '#E5E7EB' },
    track: { backgroundColor: '#5359EA' },
    handle: {
      borderColor: '#5359EA',
      borderWidth: '4px',
      opacity: '1',
      width: '24px',
      height: '24px',
      marginTop: '-10px',
      backgroundColor: 'white',
    },
  };

  return (
    <div className="flex md:flex-row flex-col md:items-center justify-evenly my-4">
      <div className="text-center border-gray-400 border flex self-center md:justify-center md:items-center rounded-md">
        <input type="number" className='w-[50px] max- border-r-gray-400 border-r mx-2 py-1 mr-0' value={range[0]} onChange={handleLeftInputChange} step="0.5" min="0" max={range[1] - 0.5} />
        <div className=' px-2 py-1 font-semibold'>L</div>
      </div>
      <div className="md:w-1/2 mx-4">
        <Slider
          min={0}
          max={25}
          step={0.5}
          value={range}
          onChange={handleChange}
          range
          styles={customSliderStyle}
        />
      </div>
      <div className="text-center border-gray-400 border flex self-center md:justify-center md:items-center rounded-md">
        <input type="number" className='w-[50px] border-r-gray-400 border-r mx-2 py-1 mr-0' value={range[1]} onChange={handleRightInputChange} step="0.5" min={range[0] + 0.5} max="25" />
        <div className=' px-2 py-1 font-semibold'>L</div>
      </div>
    </div>
  );
};

export default RangeSlider;
