import React from 'react';
import hotel from '../../assets/hotel.png';

import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-container'>
        <span className='logo'>
          <img src={hotel} alt='logo' height={'70px'} width={'100px'} />
        </span>
        <div className='nav-items'>
          <button className='nav-button'>Register</button>
          <button className='nav-button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
