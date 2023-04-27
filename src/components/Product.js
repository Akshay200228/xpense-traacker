import React from 'react';
// import data
import { product } from '../data';
// import components
import Cards from './Cards';

const Product = () => {
  // destructure product data
  const { title } = product;
  return (
    <section className='section'>
      <div className='container mx-auto'>
        {/* title & subtitle */}
        <div className='flex flex-col items-center mb-10 lg:flex-row lg:mb-20'>
          <h2
            className='section-title'
            data-aos='fade-up'
            data-aos-offset='400'
            data-aos-delay='300'
          >
            {title}
          </h2>
        </div>
        {/* cards */}
        <Cards />
      </div>
    </section>
  );
};

export default Product;
