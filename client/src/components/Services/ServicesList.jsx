import React from 'react';
import { useTranslation } from 'react-i18next';
import Service from './Service';

const ServicesList = () => {
  const { t } = useTranslation();

  return (
    <div className='services-container mt-36 mb-0'>
      <h1 className='text-center text-3xl text-blue-950 opacity-90 font-bold'>{t('services.title')}</h1>
      <p className='text-center w-11/12 lg:w-8/12 mx-auto my-5'>{t('services.description')}</p>
      <div className="services-card justify-center my-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12">
        <Service 
          img_path="/icons/building.png"
          order="01"
          title={t('services.services.01.title')}
          items={t('services.services.01.items', { returnObjects: true })} 
        />
        <Service
          img_path="/icons/red_snow.png"
          order="02"
          title={t('services.services.02.title')}
          items={t('services.services.02.items', { returnObjects: true })}
        />
        <Service
          img_path="/icons/blue_snow.png"
          order="03"
          title={t('services.services.03.title')}
          items={t('services.services.03.items', { returnObjects: true })}
        />
        <Service
          img_path="/icons/faucet.png"
          order="04"
          title={t('services.services.04.title')}
          items={t('services.services.04.items', { returnObjects: true })}
        />
        <Service
          img_path="/icons/exhaust-pipe.png"
          order="05"
          title={t('services.services.05.title')}
          items={t('services.services.05.items', { returnObjects: true })}
        />
        <Service
          img_path="/icons/supply-chain-management.png"
          order="06"
          title={t('services.services.06.title')}
          items={t('services.services.06.items', { returnObjects: true })}
        />
      </div>
    </div>
  );
}

export default ServicesList;
