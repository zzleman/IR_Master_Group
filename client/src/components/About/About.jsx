import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const About = () => {
  const { t, i18n } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="my-16 mx-10 lg:mx-20 flex flex-col xl:flex-row gap-12 items-center text-center lg:text-left">
      <div className='w-full xl:w-2/4'>
        <motion.img
          className='h-96 w-full xl:h-[600px] object-cover'
          id='right_img'
          src="/img/about_img.jpg"
          alt=""
          initial="hidden"
          whileInView="visible"
          variants={imageAnimation}
          transition={{ duration: 0.7, delay: 0.4 }}
        />
      </div>
      <div className='flex flex-col items-center gap-4 xl:w-2/4'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='px-5 lg:-r-16'
        >
          <h1 className="text-4xl font-bold mb-3">{t('about.us')}</h1>
          <p>{t('about.us_info')}</p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.7, delay: 0.5 }}
          className='px-5 lg:-r-16'
        >
          <h1 className="text-4xl font-bold mb-3">{t('about.mission')}</h1>
          <p>{t('about.mission_info')}</p>
          <NavLink to={`/about`}>
            <button className="bg-blue-950 bg-opacity-90 text-white p-2 w-40 h-11 rounded-xl mt-3">
              {t('about.more')}
            </button>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
