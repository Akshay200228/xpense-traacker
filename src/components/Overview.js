import React from 'react';
import xpense from '../assets/img/exp.jpg'

const Overview = () => {
  
  return (
    <section id='overview' className='lg:min-h-[712px] bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]'>
      <div className='container flex justify-end mx-auto overflow-hidden'>
        <img className='rounded-3xl' src={xpense} alt='' data-aos='fade-up' data-aos-offset='300' />
      </div>
    </section>
  );
};

export default Overview;
