import React from 'react';
// import data
import { nav } from '../data';

const MobileNav = () => {
  return (
    <div className='w-full h-full bg-accent/95'>
      <ul className='flex flex-col items-center justify-center h-full gap-y-8'>
        {nav.map((item, index) => {
          // destructure item
          const { href, name } = item;
          return (
            <li key={index}>
              <a className='text-xl text-white link' href={href}>
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
