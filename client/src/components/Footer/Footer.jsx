import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-blue-950 bg-opacity-90 text-white py-12">
      <div className="top grid grid-cols-3 px-20 pb-10">
        <div className='left border border-r-0 border-opacity-40 border-gray-400 p-8 flex flex-col gap-3'>
          <img className='h-28 w-24 object-cover' src="/img/logo.png" alt="" />
          <p className='w-92'>
            'İR Master Group'' Məhdud Məsuliyyətli Cəmiyyəti 2017-cu ildə təsis
            edilmişdir. ''İR Master Group'' MMC təmir, tikinti, elektrik,
            isitmə, soyutma, havalandırma və su təchizatı sistemlərinin
            quraşdırılması və satış sonrası servisini həyata keçirir.
          </p>
        </div>
        <div className='middle border border-r-0  border-opacity-40 border-gray-400 p-8 flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold'>Keçidlər</h2>
          <ul className='flex flex-col gap-3'>
            <li>
              <a href="">&#43; Ana Səhifə</a>
            </li>
            <li>
              <a href="">&#43; Haqqımızda</a>
            </li>
            <li>
              <a href="">&#43; Xidmətlər</a>
            </li>
            <li>
              <a href="">&#43; Lahiyələr</a>
            </li>
            <li>
              <a href="">&#43; Partnyorlar</a>
            </li>
            <li>
              <a href="">&#43; Lisenziya və Tövsiyyə Məktubları</a>
            </li>
          </ul>
        </div>
        <div className='right border border-opacity-40 border-gray-400 p-8 flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold'>Əlaqə</h2>
          <div className='flex items-center gap-3'>
            <img className='h-7 w-7' src="/icons/phone.png" alt="" />
            <div>
              <h4 className='text-lg font-bold'>Telefon</h4>
              <p className='text-gray-300 text-sm'>+994552129132, +994552129132</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <img className='h-8 w-8' src="/icons/mail.png" alt="" />
            <div>
              <h4 className='text-lg font-bold'>E-poçt</h4>
              <p className='text-gray-300 text-sm'>info@irmastergroup.az</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <img className='h-7 w-7' src="/icons/location.png" alt="" />
            <div>
              <h4 className='text-lg font-bold'>Ünvan</h4>
              <p className='text-gray-300 text-sm'>Bakı şəhəri, Aşıq Molla Cümə küç 44, MTK Plaza</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom flex justify-between px-20 items-center">
        <p className='text-sm'>Copyright © 2024 IR Master Group. All rights reserved.</p>
        <div className="social flex gap-3 items-center">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            style={{ color: 'white', fontSize: '30px' }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: 'white', fontSize: '27px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
