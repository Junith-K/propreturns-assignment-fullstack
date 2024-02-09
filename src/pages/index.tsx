// src/pages/index.tsx
import React from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import filters from "../constants/filters"

const Home: React.FC = () => {
  return (
    <div className='bg-white text-black'>
      <Header />
      <main>
        <div className="flex justify-evenly pb-4 px-10 bg-[#E5E7EB]">
          {filters.map((filter, index) => (
            <Filter key={index} icon={filter.icon} text={filter.text} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
