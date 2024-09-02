import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Map from '../components/Map/Map';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.VITE_APP_EMAILJS_SERVICE_ID,
        process.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.VITE_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          setStatus(t('contact.sent')); 
        },
        (error) => {
          console.error('FAILED:', error.text);
          setStatus(t('contact.notSent')); 
        }
      );
  };

  return (
    <div className='flex flex-col'>
      <Header />
      <div className="contact-container my-28 lg:my-36 lg:mx-20 flex flex-col gap-20">
        <div className="contact-top flex flex-col-reverse lg:flex-row gap-10">
          <div>
            <h1 className='mx-5 md:mx-10 text-3xl  font-bold text-blue-950 opacity-90'>{t('contact.info')}</h1>
            <div className='mx-2 md:mx-10 lg:mx-0'> 
              <div className='item flex items-center shadow-lg w-12/12 lg:w-[400px] h-40 px-5 gap-6'>
                <img className='bg-blue-950 opacity-90 p-5 h-20' src="/icons/location.png" alt="Location" />
                <div>
                  <h3 className='text-xl font-medium'>{t('contact.address')}</h3>
                  <p>Bakı şəhəri, Aşıq Molla Cümə küç 44, MTK Plaza</p>
                </div>
              </div>
              <div className='item flex items-center shadow-lg w-12/12 lg:w-[400px] h-40 px-5 gap-6'>
                <img className='bg-blue-950 opacity-90 p-5 h-20' src="/icons/phone.png" alt="Phone" />
                <div>
                  <h3 className='text-xl font-medium'>{t('contact.number')}</h3>
                  <p>{t('contact.phone')}: +994552129132</p>
                  <p>{t('contact.email')}: info@irmastergroup.az</p>
                </div>
              </div>
              <div className='item flex items-center shadow-lg w-12/12 lg:w-[400px] h-40 px-5 gap-6'>
                <img className='bg-blue-950 opacity-90 p-5 h-20' src="/icons/clock.png" alt="Clock" />
                <div>
                  <h3 className='text-xl font-medium'>{t('contact.hour')}</h3>
                  <p>{t('contact.timeline')}</p>
                  <p>{t('contact.weekend')}: <span className='text-red-600'>{t('contact.closed')}</span></p>
                </div>
              </div>
            </div>
          </div>
          <div className="right w-11/12 lg:w-[1000px] mx-auto">
            <Map />
          </div>
        </div>
        <div className="contact-bottom flex flex-col-reverse xl:flex-row gap-10">
          <div className="left mx-5 lg:mx-0">
            <h1 className='text-3xl font-bold text-blue-950 opacity-90'>{t('contact.help')}</h1>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col lg:w-max my-10">
              <div className='grid lg:grid-cols-2 gap-5 '>
                <div>
                  <input id="name" className='w-full lg:w-[420px] xl:w-80 h-14 border border-gray-300 rounded-lg bg-gray-100 p-3' type="text" name="user_name" placeholder={t('contact.name')} required />
                </div>
                <div>
                  <input id="email" className='w-full lg:w-[420px] xl:w-80 h-14 border border-gray-300 rounded-lg bg-gray-100  p-3' type="email" name="user_email" placeholder={t('contact.mailto')} required />
                </div>
                <div>
                  <input id="number" className='w-full lg:w-[420px] xl:w-80 h-14 border border-gray-300 rounded-lg bg-gray-100 p-3' type="text" name="user_number" placeholder={t('contact.phoneto')} />
                </div>
                <div>
                  <input id="subject" className='w-full lg:w-[420px] xl:w-80 h-14 border border-gray-300 rounded-lg bg-gray-100 p-3' type="text" name="user_subject" placeholder={t('contact.subject')} />
                </div>
                <div className='lg:col-span-2'>
                  <textarea id="message" className='w-full h-40 border border-gray-300 rounded-lg bg-gray-100 p-3' name="message" placeholder={t('contact.message')} required />
                </div>
              </div>
              <button className='mx-auto lg:mx-0 w-52 h-16 bg-blue-950 opacity-90 text-white mt-5' type="submit">{t('contact.send')}</button>
            </form>
            
            {status && <p className="mt-4 text-center">{status}</p>}
          </div>
          <div className="right">
            <img className='w-11/12 mx-auto lg:w-full h-[480px] object-cover' src="/img/contact-img.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
