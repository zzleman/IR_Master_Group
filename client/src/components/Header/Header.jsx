import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const submenuRef = useRef(null);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang); 
    navigate(location.pathname, { replace: true });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setSubmenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="header h-24 w-full flex items-center px-1 md:px-10 justify-between gap-32 xl:gap-10 xl:px-10 fixed z-50 bg-white">
      <div className="left flex items-center gap-1">
        <NavLink to="/" className="lg:h-20 w-16">
          <img className="h-20 w-16" src="/img/logo.png" alt="Logo" />
        </NavLink>

        <ul className="language flex gap-5 text-gray-400">
          <li>
            <button
              className={`py-2 ${i18n.language === 'az' ? 'text-blue-950 border-b-2 border-blue-950' : 'hover:text-blue-950'}`}
              onClick={() => handleLanguageChange('az')}
            >
              AZ
            </button>
          </li>
          <li>
            <button
              className={`py-2 ${i18n.language === 'en' ? 'text-blue-950 border-b-2 border-blue-950' : 'hover:text-blue-950'}`}
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </button>
          </li>
          <li>
            <button
              className={`py-2 ${i18n.language === 'ru' ? 'text-blue-950 border-b-2 border-blue-950' : 'hover:text-blue-950'}`}
              onClick={() => handleLanguageChange('ru')}
            >
              RU
            </button>
          </li>
        </ul>
      </div>

      <div className="block xl:hidden">
        <img className="h-10 cursor-pointer" src="/icons/menu.png" alt="Menu" onClick={toggleMenu} />
      </div>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-50 flex flex-col py-20 gap-5 justify-center items-center text-center xl:hidden transition-transform duration-500 ease-in-out transform ${
          menuOpen ? 'translate-x-0 backdrop-blur-md bg-black/50' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-5 right-5 text-6xl font-bold"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <div>
          <NavLink to="/" className="lg:h-20 w-16">
            <img className="h-20 w-16" src="/img/logo.png" alt="Logo" />
          </NavLink>
        </div>
        <ul className="flex flex-col gap-6 text-2xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              end
              onClick={toggleMenu}
            >
              {t('header.home')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              onClick={toggleMenu}
            >
              {t('header.about')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              onClick={toggleMenu}
            >
              {t('header.projects')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              onClick={toggleMenu}
            >
              {t('header.services')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/references"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              onClick={toggleMenu}
            >
              {t('header.references')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/partners"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              onClick={toggleMenu}
            >
              {t('header.partners')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/licenses"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              onClick={toggleMenu}
            >
              {t('header.licenses-sm')}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `py-2 ${isActive ? 'text-blue-300 border-b-2 border-blue-300' : 'text-white hover:text-blue-300'}`}
              onClick={toggleMenu}
            >
              {t('header.contact')}
            </NavLink>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="social flex gap-4 mt-6">
          <a href="https://www.facebook.com/irmastergroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} className="text-4xl text-white hover:text-blue-500" />
          </a>
          <a href="https://www.instagram.com/irmastergroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-4xl text-white hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/company/irmastergroup/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-white hover:text-blue-500" />
          </a>
        </div>
      </div>
      
      {/* Nav Menu */}
      <ul className="menu hidden xl:flex xl:items-center gap-6 text-nowrap">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `py-2 ${isActive ? 'text-blue-950 border-b-2 border-blue-950' : 'text-gray-400 hover:text-blue-950'}`}
            end
          >
            {t('header.home')}
          </NavLink>
        </li>
        <li className="relative" ref={submenuRef}>
          <button
            onClick={toggleSubmenu}
            className="py-2 flex items-center text-gray-400 hover:text-blue-950 focus:outline-none"
          >
            {t('header.about')}
            <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          </button>
          {submenuOpen && (
            <ul className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg border border-gray-200">
              <li>
                <NavLink
                  to="/about"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  onClick={() => setSubmenuOpen(false)}
                >
                  {t('header.about')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                  onClick={() => setSubmenuOpen(false)}
                >
                  {t('header.projects')}
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => `py-2 ${isActive ? 'text-blue-950 border-b-2 border-blue-950' : 'text-gray-400 hover:text-blue-950'}`}
          >
            {t('header.services')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/references"
            className={({ isActive }) => `py-2 ${isActive ? 'text-blue-950 border-b-2 border-blue-950' : 'text-gray-400 hover:text-blue-950'}`}
          >
            {t('header.references')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/partners"
            className={({ isActive }) => `py-2 ${isActive ? 'text-blue-950 border-b-2 border-blue-950' : 'text-gray-400 hover:text-blue-950'}`}
          >
            {t('header.partners')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/licenses"
            className={({ isActive }) => `py-2 ${isActive ? 'text-blue-950 border-b-2 border-blue-950' : 'text-gray-400 hover:text-blue-950'}`}
          >
            {t('header.licenses')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => `py-2 ${isActive ? 'text-blue-950 border-b-2 border-blue-950' : 'text-gray-400 hover:text-blue-950'}`}
          >
            {t('header.contact')}
          </NavLink>
        </li>
      </ul>

      <div className="social hidden xl:flex gap-6">
        <a href="https://www.facebook.com/irmastergroup/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} className="text-2xl text-gray-400 hover:text-blue-950" />
        </a>
        <a href="https://www.instagram.com/irmastergroup/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-400 hover:text-blue-950" />
        </a>
        <a href="https://www.linkedin.com/company/irmastergroup/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-400 hover:text-blue-950" />
        </a>
      </div>

    </div>
  );
};

export default Header;
