import React from 'react';
import madrid from '../../assets/properties/madrid.webp';
import austin from '../../assets/properties/austin.jpg';
import berlin from '../../assets/properties/berlin.jpg';
import lisbon from '../../assets/properties/lisbon.jpg';

import './featuredProperties.css';

const FeaturedProperties = () => {
  return (
    <div className='fp'>
      <div className='fp-item'>
        <img src={madrid} alt='madrid' className='fp-img' />
        <span className='fp-name'>Aparthotel Stare Miasto</span>
        <span className='fp-city'>Madrid</span>
        <span className='fp-price'>Starting from $120</span>
        <div className='fp-rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fp-item'>
        <img src={austin} alt='madrid' className='fp-img' />
        <span className='fp-name'>Comfort Suites Airport</span>
        <span className='fp-city'>Austin</span>
        <span className='fp-price'>Starting from $140</span>
        <div className='fp-rating'>
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className='fp-item'>
        <img src={lisbon} alt='madrid' className='fp-img' />
        <span className='fp-name'>Four Seasons Hotel</span>
        <span className='fp-city'>Lisbon</span>
        <span className='fp-price'>Starting from $99</span>
        <div className='fp-rating'>
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className='fp-item'>
        <img src={berlin} alt='madrid' className='fp-img' />
        <span className='fp-name'>Hilton Garden Inn</span>
        <span className='fp-city'>Berlin</span>
        <span className='fp-price'>Starting from $105</span>
        <div className='fp-rating'>
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
