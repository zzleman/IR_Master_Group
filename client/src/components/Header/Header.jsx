import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./Header.scss"
const Header = () => {
  return (
    <div className='header h-24 w-full flex items-center gap-24 py-2 px-24 fixed z-50 bg-white'>
      <div className="left flex items-center gap-5" >
        <img className='h-20 w-20' src="img/logo.png" alt="" />
        <ul className="language flex gap-5 text-gray-400">
          <li className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">AZ</a></li>
          <li className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">EN</a></li>
          <li className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">RU</a></li>
        </ul>
      </div>
      <ul className='menu flex gap-6 text-nowrap'>
        <li  className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">Ana Səhifə</a></li>
        <li  className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">Haqqımızda</a></li>
        <li  className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">Xidmətlər</a></li>
        <li  className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">Lahiyələr</a></li>
        <li  className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">Partnyorlar</a></li>
        <li  className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">Lisenziya və Tövsiyyə Məktubları</a></li>
        <li  className='hover:text-[var(--primary-gold)] transition duration-300'><a href="">Əlaqə</a></li>
      </ul>
      <div className="social flex gap-3 items-center">
        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#0c4da2", fontSize:"30px"}} />
        <FontAwesomeIcon icon={faInstagram} style={{color: "#0c4da2", fontSize:"27px"}}  />
      </div>
    </div>
    
  );
}

export default Header;
