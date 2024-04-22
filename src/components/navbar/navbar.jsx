import React from 'react';
import './navbar.css';

import homeIcon from '../../assets/images/home.png';
import wishlistIcon from '../../assets/images/Wishlist.svg';
import profileIcon from '../../assets/images/profil.svg';
import interestIcon from '../../assets/images/interets.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <ul className="navbar">
          <li>
            
            <img src={homeIcon} alt="Home Icon" />
            <span>Home</span>
          </li>
          <li>
            <img src={wishlistIcon} alt="Wishlist Icon" />
            <span>Wishlist</span>
          </li>
          <li>
            <img src={interestIcon} alt="Interest Icon" />
            <span>Interest</span>
          </li>
          <li>
            <img src={profileIcon} alt="Profile Icon" />
            <span>Profile</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;