import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useTranslation } from 'react-i18next';

const Licenses = () => {
  const { t } = useTranslation();
  
  const licenses = [
    { pdf: '/licenses/license1.pdf', img: '/licenses/license_img.png' },
    { pdf: '/licenses/license_extra.pdf', img: '/licenses/licenseextra_img.png' },
  ];

  const recommendations = [
    { pdf: '/licenses/xdmx.pdf', img: '/licenses/xdmx_img.png' },
    { pdf: '/licenses/centralbank.pdf', img: '/licenses/centralbank_img.png' },
    { pdf: '/licenses/icherisheher.pdf', img: '/licenses/icherisheher_img.png' },
    { pdf: '/licenses/geoproject.pdf', img: '/licenses/geoproject_img.png' },
    { pdf: '/licenses/abb.pdf', img: '/licenses/abb_img.jpeg' },
    { pdf: '/licenses/kosmik.pdf', img: '/licenses/kosmik_img.jpeg' },
    { pdf: '/licenses/ismikhanli.pdf', img: '/licenses/ismikhanli_img.jpeg' },
  ];

  return (
    <div className='flex flex-col'>
      <Header />
      <div className="licenses-container my-36 px-5 lg:px-28 flex flex-col items-center gap-16">
        <div className="licenses">
          <h1 className='text-4xl font-bold text-center text-blue-950 opacity-90 mb-10'>{t('licenses.licenses')}</h1>
          <ul className='grid md:grid-cols-2 gap-6 lg:gap-10'>
            {licenses.map((license, index) => (
              <li key={index}>
                <a href={license.pdf} target="_blank" rel="noopener noreferrer">
                  <img
                    className='h-[450px] w-[350px] lg:h-80 lg:w-64 border-8 border-blue-950 border-opacity-40 transform transition-transform duration-300 hover:-translate-y-2'
                    src={license.img}
                    alt={`License ${index + 1}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="recommendations flex flex-col items-center">
          <h1 className='text-4xl font-bold text-center text-blue-950 opacity-90 mb-10'>{t('licenses.recommendation')}</h1>
          <ul className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-10'>
            {recommendations.map((recommendation, index) => (
              <li key={index}>
                <a href={recommendation.pdf} target="_blank" rel="noopener noreferrer">
                  <img
                    className='h-[450px] w-[350px] lg:h-80 lg:w-64 border-8 border-blue-950 border-opacity-40 transform transition-transform duration-300 hover:-translate-y-2'
                    src={recommendation.img}
                    alt={`Recommendation ${index + 1}`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Licenses;
