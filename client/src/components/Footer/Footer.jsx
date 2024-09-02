import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-blue-950 bg-opacity-90 text-white py-12 w-full">
      <div className="top grid grid-cols-1 lg:grid-cols-3 px-5 lg:px-20 pb-10">
        <div className='left border lg:border-r-0 border-opacity-40 border-gray-400 p-8 flex flex-col gap-3'>
          <img className='h-28 w-24 object-cover' src="/img/logo.png" alt="Logo" />
          <p className='w-92'>
            {t('footer.info')}
          </p>
        </div>
        <div className='middle border lg:border-r-0 border-opacity-40 border-gray-400 p-8 flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold'>{t('footer.links')}</h2>
          <ul className='flex flex-col gap-3'>
            <li>
              <NavLink to={`/${i18n.language}`} className="hover:text-blue-300">
                &#43; {t('footer.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${i18n.language}/about`} className="hover:text-blue-300">
                &#43; {t('footer.about')}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${i18n.language}/projects`} className="hover:text-blue-300">
                &#43; {t('header.projects')}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${i18n.language}/services`} className="hover:text-blue-300">
                &#43; {t('footer.services')}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${i18n.language}/references`} className="hover:text-blue-300">
                &#43; {t('footer.references')}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${i18n.language}/partners`} className="hover:text-blue-300">
                &#43; {t('footer.partners')}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${i18n.language}/licenses`} className="hover:text-blue-300">
                &#43; {t('footer.licenses')}
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='right border border-opacity-40 border-gray-400 p-8 flex flex-col gap-3'>
          <h2 className='text-2xl font-semibold'>{t('footer.contact')}</h2>
          <div className='flex items-center gap-3'>
            <img className='h-7 w-7' src="/icons/phone.png" alt="Phone" />
            <div>
              <h4 className='text-lg font-bold'>{t('footer.phone')}</h4>
              <p className='text-gray-300 text-sm'>+994552129132, +994552129132</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <img className='h-8 w-8' src="/icons/mail.png" alt="Email" />
            <div>
              <h4 className='text-lg font-bold'>{t('footer.mail')}</h4>
              <p className='text-gray-300 text-sm'>info@irmastergroup.az</p>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <img className='h-7 w-7' src="/icons/location.png" alt="Location" />
            <div>
              <h4 className='text-lg font-bold'>{t('footer.address')}</h4>
              <p className='text-gray-300 text-sm'>Bakı şəhəri, Aşıq Molla Cümə küç 44, MTK Plaza</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom flex justify-between px-7 lg:px-20 items-center">
        <p className='text-sm w-2/3'>Copyright © 2024 IR Master Group. All rights reserved.</p>
        <div className="social flex gap-3 items-center">
          <a href="https://www.facebook.com/irmastergroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
            icon={faFacebookSquare}
            className="text-white text-2xl"
          />
          </a>
          <a href="https://www.instagram.com/irmastergroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
            icon={faInstagram}
            className="text-white text-xl"
          />
          </a>
          <a href="https://www.linkedin.com/company/irmastergroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white text-2xl"
          />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
