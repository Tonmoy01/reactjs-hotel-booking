import React from 'react';
import hotels from '../../assets/propertyList/hotels.webp';
import apartments from '../../assets/propertyList/apartments.jpg';
import resorts from '../../assets/propertyList/resorts.jpg';
import cabins from '../../assets/propertyList/cabins.jpg';
import villas from '../../assets/propertyList/villas.jpg';

import './propertyList.css';

const PropertyList = () => {
  return (
    <div className='p-list'>
      <div className='p-list-item'>
        <img src={hotels} alt='hotels' className='p-list-img' />
        <div className='p-list-titles'>
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className='p-list-item'>
        <img src={apartments} alt='hotels' className='p-list-img' />
        <div className='p-list-titles'>
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
      <div className='p-list-item'>
        <img src={resorts} alt='hotels' className='p-list-img' />
        <div className='p-list-titles'>
          <h1>Resorts</h1>
          <h2>2333 hotels</h2>
        </div>
      </div>
      <div className='p-list-item'>
        <img src={villas} alt='hotels' className='p-list-img' />
        <div className='p-list-titles'>
          <h1>Villas</h1>
          <h2>234 hotels</h2>
        </div>
      </div>
      <div className='p-list-item'>
        <img src={cabins} alt='hotels' className='p-list-img' />
        <div className='p-list-titles'>
          <h1>Cabins</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
