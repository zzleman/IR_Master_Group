import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ServicesList from '../components/Services/ServicesList';


const Services = () => {
  return (
    <div className='flex flex-col '>
    <Header />
    <ServicesList />
    <Footer/>
    </div>
  );
}

export default Services;
