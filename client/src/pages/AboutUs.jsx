import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className='aboutus-container pt-40 px-5 lg:px-20 py-20 flex flex-col gap-5 lg:gap-20'>
        <h1 className='text-4xl font-bold text-center text-blue-950 opacity-90'>{t('about.title')}</h1>
        <div className="top flex lg:flex-row flex-col-reverse gap-16">
          <div className="left lg:w-10/12 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-3">{t('about.us')}</h1>
              <p>{t('about.us_info')}</p>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-3">{t('about.mission')}</h1>
              <p>{t('about.mission_info')}</p>
            </div>
          </div>
          <div className="right relative">
            <div className='border-4 border-blue-950 opacity-40 hidden absolute md:block md:w-11/12 w-[420px] md:h-96 lg:h-[550px] top-12 md:right-3 lg:right-[-40px] z-0'></div>
            <img className='w-full md:w-11/12 md:h-96 h-80 lg:h-[560px] object-cover z-10 relative' src="/img/about-cons.jpg" alt="About Us" />
          </div>
        </div>
        <div className="bottom lg:w-3/4 lg:mx-auto lg:text-center">
          <h1 className="text-4xl font-bold mb-3">{t('about.safety')}</h1>
          <p>{t('about.safety_info')}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
