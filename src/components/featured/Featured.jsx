import React from 'react';
import dublin from '../../assets/dublin.webp';
import reno from '../../assets/reno.webp';
import austin from '../../assets/austin.webp';

import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured-item'>
        <img src={dublin} alt='image' className='featured-img' />
        <div className='featured-titles'>
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className='featured-item'>
        <img src={reno} alt='image' className='featured-img' />
        <div className='featured-titles'>
          <h1>Reno</h1>
          <h2>532 properties</h2>
        </div>
      </div>
      <div className='featured-item'>
        <img src={austin} alt='image' className='featured-img' />
        <div className='featured-titles'>
          <h1>Austin</h1>
          <h2>553 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
