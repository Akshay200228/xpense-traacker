import React from 'react';
// import data
import { overview } from '../data';

const Brands = () => {
  // destructure overview
  const { brands } = overview;
  return (
    <section className='py-9'>
      <div className='container flex flex-col items-center justify-between mx-auto space-y-6 lg:flex-row'>
        {/* brands */}
        {brands.map((item, index) => {
          // destructure item
          const { image, delay } = item;
          return (
            <div key={index} data-aos='fade-up' data-aos-delay={delay}>
              {/* brand img */}
              <img src={image} alt='' />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
