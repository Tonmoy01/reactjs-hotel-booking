import React from 'react';
import searchItem from '../../assets/searchItem/searchItem.webp';

import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='search-item'>
      <img src={searchItem} alt='searchItem' className='si-img' />
      <div className='si-desc'>
        <h1 className='si-title'>Tower Street Apartments</h1>
        <span className='si-distance'>500m from center</span>
        <span className='si-taxi-op'>Free airport taxi</span>
        <span className='si-subtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='si-features'>
          Entire studio • 1 bathroom • 21m<sup>2</sup> 1 full bed
        </span>
        <span className='si-cancel-op'>Free cancellation</span>
        <span className='si-cancel-op-subtitle'>
          Yo can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='si-details'>
        <div className='si-rating'>
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className='si-detail-texts'>
          <span className='si-price'>$123</span>
          <span className='si-tax-op'>Includes taxes and fees</span>
          <button className='si-check-btn'>See avilability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
